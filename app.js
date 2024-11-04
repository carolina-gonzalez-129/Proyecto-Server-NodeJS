import express from 'express';
import routes from './routes/routes.js';
import connection from "./connection/connection.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/app', routes);


app.use((req, res, next) => {
    res.status(404).send({
        success: false,
        message: 'Not found'

    });
});
await connection.sync({force:false});

const port = process.env.PORT || 2412;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


