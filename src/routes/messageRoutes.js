import * as messageController from '../controllers/messageController.js';

export default async function messageRoutes(fastify, options) {
  fastify.get('/', messageController.index);
  fastify.get('/:id', messageController.show);
  fastify.post('/', messageController.store);
  fastify.patch('/:id', messageController.update);
  fastify.delete('/:id', messageController.destroy);
}