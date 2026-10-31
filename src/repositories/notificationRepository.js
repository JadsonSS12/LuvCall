import notification from '../models/notification'

export async function findAll(){
    return await notification.findAll();

}

export async function findById(notificationId){
    return await notification.findByPk(notificationId);
}

export async function createNotification(title, content, date, receiver){
    return await notification.create(title, content, date, receiver);
}

export async function updateNotification(notificationId, updateData){
    await notification.update(updateData, {where: {id: notification}});
    return await findById(notificationId);
}

export async function deleteNotification(notificationId){
    return await notification.destroy({where: {id: notificationId}});
}