import UserService from "../services/UserService.js";
import {Receta} from "../models/index.js"

class UserControllers {
    userService = new UserService();

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsersService();
            if(users.length===0){
                res.status(404).send({
                    success:false,
                    message:'No hay usuarios cargados todavia'
                })
            }
            else{
                res.status(200).send(users);
            }
        } catch (error) {
            res.status(400).send('Ocurrio un error :', error.message);
        }
    };
    getUserById = async (req, res) => {
        try{

            const {id}= req.params;
            const user = await this.userService.getUserByIdService(id, {
                include: [{
                    model: Receta
                }]
            });

            res.status(200).send(user);
        }
        catch (e) {
            res.status(404).send({
                success:false,
                message:'No se encontro al user con el id que enviaste, por favor chequealo y corregilo e intenta nuevamente'
            })
        }

    };
    createUser = async (req, res) => {
        try{
            const {name,mail,password,RoleId} = req.body;
            const user = await this.userService.createUserService(name,mail,password,RoleId);
            res.status(200).send({message:user});
        }
        catch (e) {
            console.error("Error creando usuario:", e);
            res.status(400).send({

success:false,
                message: 'No se pudo crear usuario. Error: ' + (e.message)
            });
        }

    };
    updateUser = async (req, res) => {
        try{
            const {id}= req.params;
            const { name, mail, password,RoleId } = req.body;
            const updatedData = { name, mail, password,RoleId };
            const user = await this.userService.updateUserService(id,updatedData);
            if(!user){
                res.status(404).send({
                    success:false,
                    message: 'No se pudo modificar al user. Error: ' + (e.message)
                });
            }
            res.status(200).send(user);
        }catch (e) {
            res.status(400).send({
                success:false,
                message: 'No se pudo modificar al usuario. Error: ' + (e.message)
            });
        }

    };
    deleteUser = async (req, res) => {
        try{
            const {id}= req.params;
            const user = await this.userService.deleteUserService(id);
            res.status(200).send(user);
        }catch (e) {
            console.error("Error eliminando al user:", e);
            res.status(400).send({
                success:false,
                message: 'No se pudo eliminar al usuario. Error: ' + (e.message)
            });
        }
    };
    login= async (req,res)=>{
       try {
           const {mail, password} = req.body;
           const user = await this.userService.loginUserService({mail, password});
           res.status(200).send(user);
           return user;
       }catch (e) {
           res.status(500).json({
               message: 'Ocurrió un error en el proceso de login. Por favor, intenta nuevamente.',
               error: e.message
           });
           console.log('Ocurrio un problema',e)
       }
    }
}

export default UserControllers;