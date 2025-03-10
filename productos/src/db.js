import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || '172.29.222.95',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1812017',
    database: process.env.DB_NAME || 'productos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;