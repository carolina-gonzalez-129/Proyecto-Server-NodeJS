import UserService from "../services/UserService.js";


class UserControllers {
    userService = new UserService();

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsersService();
            res.status(200).send(users);
        } catch (error) {
            res.status(404).send("get all users");
        }
    };
    getUserById = async (req, res) => {
        const user = await this.userService.getUserByIdService();
        res.status(200).send(user);
    };
    createUser = async (req, res) => {
        try{
            const {name,mail,password} = req.body;
            console.log(req.body);
            const user = await this.userService.createUserService(name,mail,password);
            res.status(200).send({success:true,message:user});
        }
        catch (e) {
            console.error("Error creando usuario:", e);
            res.status(400).send({
success:false,
                message: 'No se pudo'
            });
        }

    };
    updateUser = async (req, res) => {
        try{
            const {id} = req.body;
            const user = await this.userService.updateUserService(idUser);
            res.status(200).send(user);
        }catch (e) {
            throw (e);
        }

    };
    deleteUser = async (req, res) => {
        try{
            const {id} = req.body;
            const user = await this.userService.deleteUserService(id);
            res.status(200).send(user);
        }catch (e) {
            throw (e);
        }
    };
}

export default UserControllers;