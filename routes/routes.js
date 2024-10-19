import {Router} from 'express'
import userRoutes from './userRoutes.js';
import recetasRoutes from "./recetasRoutes.js";

const routes = Router();
routes.use('/user', userRoutes);
routes.use('/recetas', recetasRoutes);



export default routes;