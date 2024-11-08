import express from 'express';
import routes from './routes/routes.js';
import connection from "./connection/connection.js";
import dotenv from 'dotenv';
import RoleSeed from "./seed/roleSeed.js";
import roleSeed from "./seed/roleSeed.js";
//import userSeed from "./seed/userSeed.js";
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
await connection.sync({force:true});
await roleSeed()
//await userSeed()
const port = process.env.PORT || 8089;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


