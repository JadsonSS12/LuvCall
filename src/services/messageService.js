import * as messageRepository from "../repositories/messageRepository.js";
import { addNotificationJob } from "../queues/notificationQueue.js";

export async function getAllMessages() {
  return await messageRepository.findAll();
}

export async function getMessageById(id) {
  const message = await messageRepository.findById(id);
  if (!message) {
    const error = new Error("Mensagem não encontrada.");
    error.statusCode = 404;
    throw error;
  }
  return message;
}

export async function createMessage( senderId, receiverId, content, date ) {
  // 1. Cria a mensagem no MySQL através do repositório
  const createdMessage = await messageRepository.createMessage( senderId, receiverId, content, date );

  // 2. Enfileira a notificação no BullMQ (Redis)
  await addNotificationJob({
    messageId: createdMessage.id,
    senderId,
    receiverId,
    content,
    date,
  });

  return createdMessage;
}