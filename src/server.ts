import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Working' });
});

export default app;