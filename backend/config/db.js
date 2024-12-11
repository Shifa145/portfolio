const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'Shifa@2001',
  database: process.env.MYSQL_DB || 'portfolio_db',
});

const connectDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`MySQL Connected: ${connection.threadId}`);
    connection.release();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
