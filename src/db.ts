import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRESUSER,
    database: process.env.POSTGRESDATABASE,
    password: process.env.POSTGRESPASSWORD,
    port: Number(process.env.POSTGRESPORT),
    host: process.env.POSTGRESHOST,
});

export default pool;
