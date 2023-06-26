import express from 'express';
import cors from 'cors';
import errorHandler from '../middleware/errorHandler';
import router from '../routes/index';
import path from 'path';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(cookieParser());
app.use('/api', router);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.json({ message: 'Working' });
});

export default app;
