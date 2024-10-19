import {Router} from 'express'
 import RecetaControllers from "../controllers/recetaControllers.js";

const recetasControllers = new RecetaControllers();

const recetasRoutes = Router();

recetasRoutes.get('/', recetasControllers.getAllRecetas)
recetasRoutes.get('/:id',recetasControllers.getRecetaById)
recetasRoutes.post('/',recetasControllers.createReceta)
recetasRoutes.put('/:id',recetasControllers.updateReceta)
recetasRoutes.delete('/:id',recetasControllers.deleteReceta)




export default recetasRoutes;