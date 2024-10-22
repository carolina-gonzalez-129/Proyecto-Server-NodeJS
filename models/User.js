import { Sequelize, Model,DataTypes} from 'sequelize'
import connection from "../connection/connection.js";

//sequelize me provee un monton de constrains y validaciones
// usar de aca : https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
//si o si usarlo!


class User extends Model{}
//x defecto ya usa lo de id autoincremental
User.init({
    name : {
        type: DataTypes.STRING,
        //por default pueden ser null por eso tengo q aclarar si no quiero q lo sean
        allowNull: false ,
        validate: {
            len: {
                args: [1, 50], // longitud min y max
                msg: "El nombre debe tener entre 1 y 50 caracteres."
            }
        }
    },
    mail:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail: {
                msg: "El correo debe ser una dirección de correo válida."
            }
        }

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len: {
                args: [6, 100],
                msg: "la long min es 6 y la max 100"
            }
        }
    }

},
    { sequelize:connection,
        modelName:'User',
        timestamps: false

    }

)


export default User;