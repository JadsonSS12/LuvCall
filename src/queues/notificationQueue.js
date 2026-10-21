import { Queue } from "bullmq";
import { redisConnection } from "../config/redis.js";

export const notificationQueue = new Queue('notificationQueue', {
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

export async function addNotificationJob(data) {
  return await notificationQueue.add('sendNotification', data);
}