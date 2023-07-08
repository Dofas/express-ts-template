import dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = Number(process.env.PORT) || 8080;
export const DB_USER = String(process.env.POSTGRESUSER);
export const DB_NAME = String(process.env.POSTGRESDATABASE);
export const DB_PASS = String(process.env.POSTGRESPASSWORD);
export const DB_PORT = Number(process.env.POSTGRESPORT);
export const DB_HOST = String(process.env.POSTGRESHOST);
