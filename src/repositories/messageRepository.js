import message from '../models/message.js';

export async function findAll(){
    return await message.findAll();
}

export async function findById(id){
    return await message.findByPk(id)
}

export async function createMessage(senderId, receiverId, content, date){
    return await message.create(senderId, receiverId, content, date);

}

export async function updateMessage(messageId, updateData){
    await message.update(updateData, {where: { id : {messageId}}});
    return await findById(messageId);
}

export async function deleteMessage(messageId){
    return await message.destroy({ where: { id: messageId } });
}
