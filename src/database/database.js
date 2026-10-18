import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3308,
    dialect: 'mysql',
    logging: false, // Defina como console.log se quiser ver as queries SQL no terminal

    // Configurações do pool embutido do Sequelize:
    pool: {
      max: 5,        // Número máximo de conexões abertas no pool
      min: 0,        // Número mínimo de conexões
      acquire: 30000,// Tempo máximo (ms) tentando conectar antes de disparar erro
      idle: 10000    // Tempo máximo (ms) que uma conexão fica ociosa antes de ser liberada
    }
  }
);

export default sequelize;