import * as userController from '../controllers/userController.js';

export default async function userRoutes(fastify, options) {
  fastify.get('/', userController.index);
  fastify.get('/:id', userController.show);
  fastify.post('/', userController.store);
  fastify.put('/:id', userController.update);
  fastify.delete('/:id', userController.destroy);
}