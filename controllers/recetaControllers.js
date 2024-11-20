
import RecetaService from "../services/RecetaService.js";
import receta from "../models/Receta.js";
class RecetaControllers{
   recetaService = new RecetaService();

    getAllRecetas = async (req, res) => {
        try {
            const recetas = await this.recetaService.getAllRecetasService();
            if(recetas.length===0){
                res.status(404).send({
                    success:false,
                    message:'No hay recetas aun'
                })
            }
            else{
                res.status(200).send(recetas);
            }

        } catch (error) {
            res.status(404).send('Ocurrio un error :', e.message);
        }
    };
    getRecetaById = async (req, res) => {
        try {
            const {id}= req.params;
            const receta = await this.recetaService.getRecetaByIdService(id)
           if(!receta){
               res.status(404).send({
                   success:false,
                   message:'No se encontro a la receta con el id que enviaste, por favor chequealo y corregilo e intenta nuevamente'
               })
           }
           else{
               res.status(200).send(receta);
           }
        }catch (e) {
           throw e;
        }

    };
    createReceta = async (req, res) => {
        try{
            const {nombre,tipo,llevaCarne,UserId} = req.body;
            const receta = await this.recetaService.createRecetaService({ nombre, tipo, llevaCarne,UserId });
            res.status(200).send({message:receta});

        }
        catch (e) {
            console.error("Error creando receta:", e);
            res.status(400).send({
                success:false,
                message: 'No se pudo crear receta. Error: ' + (e.message)
            });

        }

    };
    updateReceta = async (req, res) => {
        try{
            const {id}= req.params;
            const {nombre,tipo,llevaCarne,UserId} = req.body;
            const updatedData = {nombre,tipo,llevaCarne,UserId};
            const receta = await this.recetaService.updateRecetaService(id,updatedData);
            //agregue esto para q lidie con 2 cases o bien no la tiene y es un 404  o bien la tiene pero
            //se cometen violaciones a las validaciones de modifcar, por eso aadi en el catch lo del 400 (bad request)
            if(!receta){
                res.status(404).send({
                    success:false,
                    message: 'No se pudo modificar la receta. Error: ' + (e.message)
                });
            }
            res.status(200).send(receta);

        }catch (e) {
            res.status(400).send({
                success:false,
                message: 'No se pudo modificar la receta. Error: ' + (e.message)
            });

        }

    };
    deleteReceta = async (req, res) => {
        try{
            const {id}= req.params;
            const receta = await this.recetaService.deleteRecetaService(id);
            res.status(200).send(receta);
        }catch (e) {
            res.status(400).send({
                success:false,
                message: 'No se pudo eliminar la receta . Error: ' + (e.message)
            });

        }
    };

}
export default RecetaControllers;