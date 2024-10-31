import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
const DB_NAME=process.env.DB_NAME
const DB_USER=process.env.DB_USER
const DB_PASS= process.env.DB_PASS
const DB_HOST= process.env.DB_HOST
const DB_DIALECT= process.env.DB_DIALECT
const DB_PORT=process.env.DB_PORT




export{
    PORT,
    DB_NAME,
    DB_PORT,
    DB_DIALECT,
    DB_HOST,
    DB_PASS,
    DB_USER,
}