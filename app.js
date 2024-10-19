import express from 'express';
import routes from './routes/routes.js';
import connection from "./connection/connection.js";
import User from './models/User.js';
import Receta from "./models/Receta.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/app', routes);


app.use((req, res, next) => {
    res.status(404).send({
        success: false,
        message: 'No se encontro xdddd desde app, el start va con nodemon'

    });
});

await User.sync()

await Receta.sync()

const port = process.env.PORT || 2406;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

