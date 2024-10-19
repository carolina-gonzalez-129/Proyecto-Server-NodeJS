
import User from "../models/User.js";


class UserService{

    getAllUsersService = async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch (e) {
            throw e;
        }
    }

    getUserByIdService = async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            return user;
        } catch (e) {
            throw e;
        }
    }

   createUserService= async (name,mail,password)=>{
        try{
            const user = await User.create({name,mail,password})
            return user;
        }catch (e) {
         throw e;
        }

    }

    updateUserService = async (id, updatedData) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            await user.update(updatedData);
            return user;
        } catch (e) {
            throw e;
        }
    }

    deleteUserService = async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            await user.destroy();
            return { message: 'Usuario eliminado' };
        } catch (e) {
            throw e;
        }
    }

}

export default UserService