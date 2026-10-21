/*import 'dotenv/config'; // Garante o carregamento do .env no Node.js (ES Modules)
import { redisConnection } from './src/config/redis.js';
import { NotificationQueue } from './src/queues/notificationQueue.js';

async function runTest() {
  console.log('🔄 1. Testando conexão com o Redis...');

  try {
    // Testa o comando PING no Redis
    const pong = await redisConnection.ping();
    console.log(`✅ Redis respondeu: ${pong}`);

    console.log('\n🔄 2. Inicializando NotificationQueue...');
    const notificationQueue = new NotificationQueue();

    console.log('🔄 3. Adicionando job de teste na fila...');
    const job = await notificationQueue.addNotificationJob({
      messageId: '123e4567-e89b-12d3-a456-426614174000',
      receiverId: 'usr_9876',
      content: 'Mensagem de teste do BullMQ',
    });

    console.log(`✅ Job enfileirado com sucesso! ID do Job: ${job.id}`);

    // Verifica quantos jobs estão na fila aguardando processamento
    const waitingCount = await notificationQueue.queue.getWaitingCount();
    console.log(`📊 Jobs aguardando na fila: ${waitingCount}`);

  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
  } finally {
    console.log('\n🔌 Encerrando conexões...');
    await redisConnection.quit();
    process.exit(0);
  }
}

runTest();*/