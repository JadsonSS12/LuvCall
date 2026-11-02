import * as notificationController from "../controllers/notificationController.js"

export default async function notificationRoutes(fastify, optins){
    fastify.get('/', notificationController.index);
    fastify.get('/:id', notificationController.store);
    fastify.post('/', notificationController.create);
    fastify.put('/:id', notificationController.update);
    fastify.delete('/:id', notificationController.destroy);

}