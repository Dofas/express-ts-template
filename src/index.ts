import app from './server';
import pool from './db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    return console.log(`Express started on port ${PORT}} and ${pool}`);
});
