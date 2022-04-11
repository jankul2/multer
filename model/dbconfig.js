import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
 const con=mysql.createPool({
    host: process.env.dbhost,
    user: process.env.user,
    database: process.env.database,
    password:process.env.pass,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

})
export default con;