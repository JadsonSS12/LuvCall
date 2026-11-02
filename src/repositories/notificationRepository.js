import notification from '../models/notification.js'

export async function findAll(){
    return await notification.findAll();

}

export async function findById(notificationId){
    return await notification.findByPk(notificationId);
}

export async function createNotification(title, content, date, receiver){
    return await notification.create({title, content, date, receiver});
}

export async function updateNotification(notificationId, updateData){
    await notification.update(updateData, {where: {id: notificationId}});
    return await findById(notificationId);
}

export async function deleteNotification(notificationId){
    return await notification.destroy({where: {id: notificationId}});
}