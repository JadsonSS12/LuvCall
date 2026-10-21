import Fastify from 'fastify';
import userRoutes from './src/routes/userRoutes.js';
import messageRoutes from './src/routes/messageRoutes.js';

export async function build() {
  const app = Fastify({
    logger: true,
  });

  app.get('/health', async () => ({ status: 'ok' }));

  // Registra as rotas com prefixo no Fastify
  await app.register(userRoutes, { prefix: '/users' });
  await app.register(messageRoutes, { prefix: '/messages' });

  return app;
}