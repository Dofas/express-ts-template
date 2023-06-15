import app from './server';
import { APP_PORT } from './config';

app.listen(APP_PORT, () => {
    return console.log(`Express started on port ${APP_PORT}}`);
});
