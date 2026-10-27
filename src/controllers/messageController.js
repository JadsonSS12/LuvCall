import * as messageService from "../services/messageService.js";

export async function index(request, reply) {
  try {
    const messages = await messageService.getAllMessages();
    return reply.status(200).send(messages);
  } catch (error) {
    return reply.status(500).send({ error: error.message || "Erro interno do servidor." });
  }
}

export async function show(request, reply) {
  try {
    const { id } = request.params;
    const message = await messageService.getMessageById(id);
    return reply.status(200).send(message);
  } catch (error) {
    const status = error.statusCode || 500;
    return reply.status(status).send({ error: error.message });
  }
}

export async function store(request, reply) {
  try {
    const { senderId, receiverId, content, date } = request.body;

    if (!senderId || !receiverId || !content) {
      return reply.status(400).send({ error: "senderId, receiverId e content são obrigatórios." });
    }

    const createdMessage = await messageService.createMessage({ senderId, receiverId, content, date });
    return reply.status(201).send(createdMessage);
  } catch (error) {
    const status = error.statusCode || 500;
    return reply.status(status).send({ error: error.message || "Erro ao enviar mensagem." });
  }
}

export async function update(request, reply){
  try{
    const {id} = request.params;
    const {content, date} = request.body;

    if (!id){
      return reply.status(404).send({error:'messagem atualizada não existe2'});
    }
    const updateMessage = await messageService.updateMessage(id, content, date);
    return reply.status(301).send(updateMessage);

  }catch(error){
    const status = error.statusCode || 500;
    return reply.status(status).send({ error: error.message || "Erro ao atualizar a mensagem." });
  }
  
}

export async function destroy(request, reply) {
  try {
    const { id} = request.body;

    if (!id) {
      return reply.status(400).send({ error: "senderId, receiverId e content são obrigatórios." });
    }

    const dMessage = await messageService.deleteMessage(id);
    return reply.status(201).send(dMessage);
  } catch (error) {
    const status = error.statusCode || 500;
    return reply.status(status).send({ error: error.message || "Erro ao enviar mensagem." });
  }
}