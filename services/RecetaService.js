
import {Receta} from "../models/index.js"
import {User} from "../models/index.js"

//dsps el controller de recetas le va a invocar estos metodos a recetaservice
//asimismo los metodos del controller q hacen referencia a esos pedidos
//van a ser invocados por el recetasRoutes q realice las distintas solicitudes http

class RecetaService{

    getAllRecetasService = async ()=>{
        try {
            const recetas = await Receta.findAll();
            return recetas;
        }
        catch (e) {
            throw e;
        }
    }
    getRecetaByIdService = async (id)=>{
        try {
            const receta = await Receta.findByPk(id);
            if(!receta){
                throw new Error('No se encontro la receta con el id proporcionado')
            }
            return receta;
        }catch (e){
            throw e;
        }
    }
    createRecetaService = async(nombre,tipo,llevaCarne) =>{
        try {
            const receta = await Receta.create(nombre,tipo,llevaCarne)
            return receta;
        }catch (e) {
            throw e;

        }

    }

    updateRecetaService = async (id, updatedData) => {
        try {
            const receta = await Receta.findByPk(id);
            if (!receta) {
                throw new Error('Receta no encontrada');
            }
            await receta.update(updatedData);
            return receta;
        } catch (e) {
            throw e;
        }
    }

    deleteRecetaService = async (id) => {
        try {
            const receta = await Receta.findByPk(id);
            if (!receta) {
                throw new Error('Receta no encontrada');
            }
            await receta.destroy();
            return { message: 'Receta eliminada' };
        } catch (e) {
            throw e;
        }
    }


}

export default RecetaService;