import pool from "../database/pool.js";

try {
const [rows] = await pool.query('SELECT 1');
console.log('Conectado!');
} catch (error) {
console.error(error);
}