import app from './server';
import { APP_PORT } from './config';
import sequelize from './db';

sequelize
    .sync()
    .then(() => {
        console.log('Db started');
    })
    .catch((error) => console.log(`db failed to start ${error.message}`));

app.listen(APP_PORT, () => {
    return console.log(`Express started on port ${APP_PORT}`);
});
