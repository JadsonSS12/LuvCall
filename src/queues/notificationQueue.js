import { Queue } from "bullmq";
import { redisConnection } from "../config/redis.js";

export class NotificationQueue{
    constructor(){
        this.queue = new Queue('notificationQueue',{
            connection: redisConnection,
            defaultJobOptions: {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 2000,
                },
                removeOnComplete: true,
                removeOnFail: false,
            }
        });
    }

    //verificar o que faz posteriormente
    /**
   * Adiciona uma tarefa de envio de notificação na fila.
   * @param {Object} data - Dados necessários para o Worker processar a notificação
   * @param {string} data.messageId - ID da mensagem criada no MySQL
   * @param {string} data.receiverId - ID do destinatário
   * @param {string} data.content - Conteúdo da mensagem
   */

    async addNotificationJob(data){
        return await this.queue.add('sendNotification', data);
    }
}