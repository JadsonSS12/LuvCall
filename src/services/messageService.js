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

export async function updateMessage(messageId, updateData){ //alterado para UpdateData e não atributos
  const updateMessage = await messageRepository.findById(messageId);

  if (!updateMessage){
   const error = new Error("Messagem não existe1.");
   error.statusCode = 404;
   throw error;
  }

  return await messageRepository.updateMessage(messageId, updateData);
}

export async function destroyMessage(messageId){
  const deleteMessage = await messageRepository.findById(messageId);

  if (!deleteMessage){
    const error = new Error("Messagem deletada não existe1.");
   error.statusCode = 404;
   throw error;
  }

  return await messageRepository.deleteMessage(messageId);
}