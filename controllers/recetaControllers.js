
import RecetaService from "../services/RecetaService.js";
class RecetaControllers{
   recetaService = new RecetaService();

    getAllRecetas = async (req, res) => {
        try {
            const recetas = await this.recetaService.getAllRecetasService()
            res.status(200).send(recetas);
        } catch (error) {
            res.status(404).send("No se enconrtraron recetas");
        }
    };
    getRecetaById = async (req, res) => {
        try {
            const {id}= req.params;
            const receta = await this.recetaService.getRecetaByIdService(id)
            res.status(200).send(receta);
        }catch (e) {
            res.status(404).send("No se encontro la receta");
        }

    };
    createReceta = async (req, res) => {
        try{
            const {nombre,tipo,llevaCarne,UserId} = req.body;
            const receta = await this.recetaService.createRecetaService({ nombre, tipo, llevaCarne,UserId });
            res.status(200).send({success:true,message:receta});
        }
        catch (e) {
            console.error("Error creando receta:", e);
            res.status(400).send({
                success:false,
                message: e.message
            });
        }

    };
    updateReceta = async (req, res) => {
        try{
            const {id}= req.params;
            const {nombre,tipo,llevaCarne} = req.body;
            const updatedData = {nombre,tipo,llevaCarne};
            const receta = await this.recetaService.updateRecetaService(id,updatedData);
            res.status(200).send(receta);
        }catch (e) {
            res.status(400).send({
                success:false,
                message: 'No se pudo modficar info sobre recta'
            });
            throw (e);
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
                message: 'No se pudo eliminar receta'
            });
            throw (e);
        }
    };

}
export default RecetaControllers;