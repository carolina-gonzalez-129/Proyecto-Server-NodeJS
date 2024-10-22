import UserService from "../services/UserService.js";


class UserControllers {
    userService = new UserService();

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsersService();
            res.status(200).send(users);
        } catch (error) {
            res.status(404).send("no hay usuarios");
        }
    };
    getUserById = async (req, res) => {
        try{
            //recordar q es por parametros y no por body xq no recibo un cuerpo
            //comosi en post u update
            const {id}= req.params;
            const user = await this.userService.getUserByIdService(id);
            res.status(200).send(user);
        }
        catch (e) {
            res.status(404).send('No encontre al usuario con el id q me enviaste')
        }

    };
    createUser = async (req, res) => {
        try{
            const {name,mail,password} = req.body;
            const user = await this.userService.createUserService(name,mail,password);
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
            const { name, mail, password } = req.body;
            const updatedData = { name, mail, password };
            const user = await this.userService.updateUserService(id,updatedData);
            res.status(200).send(user);
        }catch (e) {
            throw (e);
        }

    };
    deleteUser = async (req, res) => {
        try{
            const {id}= req.params;
            const user = await this.userService.deleteUserService(id);
            res.status(200).send(user);
        }catch (e) {
            throw (e);
        }
    };
}

export default UserControllers;