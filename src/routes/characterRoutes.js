import * as characterController from "../controllers/characterController.js"

export default async function characterRoutes(fastify, options){
    fastify.get('/', characterController.index);
        fastify.get('/:id', characterController.show);
        fastify.post('/', characterController.create);
        fastify.put('/:id', characterController.update);
        fastify.delete('/:id', characterController.destroy);
}