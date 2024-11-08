import { Sequelize, Model,DataTypes} from 'sequelize'
import connection from "../connection/connection.js";
import bcrypt from "bcrypt"
//sequelize me provee un monton de constrains y validaciones
// usar de aca : https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
//si o si usarlo!


class User extends Model{
   comparePass = async (password) => {
        const comparePass = await bcrypt.compare(password, this.password);
        return comparePass;
    };
}
//x defecto ya usa lo de id autoincremental
User.init({
    name : {
        type: DataTypes.STRING,
        allowNull:false,
        notEmpty:true,
        unique: true,
        //por default pueden ser null por eso tengo q aclarar si no quiero q lo sean
        validate: {
            len: {
                args: [1, 50],
                msg: "El nombre debe tener entre 1 y 50 caracteres."
            },

        }
    },
    mail:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            //es una built in function la de isEmail,
            isEmail: {
                msg: "El correo debe ser una dirección de correo válida."
            }
        }

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        notEmpty: true,
        validate:{
            isAlphanumeric:{
                msg:'La contrasenia debe contener letras y numeros'
            },
            len: {
                args: [6, 100],
                msg: "la pass debe constar de 6 a 100 caracteres alfanumericos"
            }
        }
    }
        ,
    RoleId:{
        type:DataTypes.INTEGER,
        defaultValue:2,
        references: {
            model: "roles",
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

    }

},
    { sequelize:connection,
        modelName:'User',
        timestamps: false

    }

)

User.beforeCreate(async (user)=>{
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.password,salt)
    user.password=hash;
})

export default User;