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
        const receta = await this.recetaService.getRecetaByIdService()
        res.status(200).send(receta);
    };
    createReceta = async (req, res) => {
        try{
            const {nombre,tipo,llevaCarne} = req.body;
            const receta = await this.recetaService.createRecetaService(nombre,tipo,llevaCarne)
            res.status(200).send({success:true,message:receta});
        }
        catch (e) {
            console.error("Error creando receta:", e);
            res.status(400).send({
                success:false
            });
        }

    };
    updateReceta = async (req, res) => {
        try{
            const {id} = req.body;
            const receta = await this.recetaService.updateRecetaService(id);
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
            const {id} = req.body;
            const receta = await this.recetaService.deleteUserService(id)
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