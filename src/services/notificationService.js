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

export async function updateNotification(notificationId, title, content, date, receiverId){
    const upNot = await notificationRepository.findById(notificationId);

    if (!upNot){
        const error = new Error("notificação upgrade não existe1");
        error.statusCode = 409;
        throw error;
    }

    const updateData = {};

    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (date) updateData.content = date;
    if (receiverId) updateData.receiverId = receiverId;


    return await notificationRepository.updateNotification(notificationId, updateData);
}

export async function deleteNotification(notificationId){

    const delNot = await notificationRepository.findById(notificationId);

    if (!delNot){
        const error = new Error("notificação delete não existe1");
        error.statusCode = 409;
        throw error;
    }
    return notificationRepository.deleteNotification(notificationId);
}