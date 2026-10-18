import { build } from './app.js';
///import { setupWorkers } from './workers/index.js';
///import { redisConnection } from './config/redis.js';
import sequelize from "./src/database/database.js"
import './src/models/user.js';

export async function starting(){
    const app = await build();

    const PORT = 3000;
    const HOST = '0.0.0.0'

    try {
        await app.listen({ port: PORT, host: HOST}),
        app.log.info(`server rodando em ${HOST}:${PORT}`);
    } catch(err){
        app.log.error(err);
        process.exit(1);
    }

 try {
  await sequelize.authenticate();
  app.log.info('Conectado ao MySQL!');

  await sequelize.sync();
  app.log.info('Tabelas sincronizadas com sucesso!');
} catch (error) {
  console.error('Detalhe do erro de conexão:', error);
}

    const shutdown = async (signal) => {
        app.log.info('encerrando server');

        try{ 
            await app.close();
            app.log.info('fechando app');
        } catch(err){
            app.log.error('erro ao fechar app');
            process.exit(1);
        }
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
}

starting();
