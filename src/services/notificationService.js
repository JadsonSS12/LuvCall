import * as notificationRepository from "../repositories/notificationRepository.js"

export async function findAll(){
    return await notificationRepository.findAll();
}

export async function findById(notificationId){
    return await notificationRepository.findById(notificationId);
}

export async function createNotification(title, content, date, receiverId){
    return await notificationRepository.createNotification(title, content, date, receiverId);
}

export async function updateNotification(notificationId, updateData){
    await notificationRepository.updateNotification(updateData, {where: {id: notificationId}});
    return await findById(notificationId);
}

export async function deleteNotification(notificationId){
    return notificationRepository.deleteNotification(notificationId);
}