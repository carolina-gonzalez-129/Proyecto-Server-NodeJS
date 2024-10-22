import { Sequelize, Model,DataTypes} from 'sequelize'
import connection from "../connection/connection.js";

class Receta  extends Model{}
Receta.init({
    nombre : {
        type: DataTypes.STRING,
        allowNull: false ,
        validate: {
            len: {
                args: [5, 30],
                msg: "El nombre de la receta debe constar de entre 5 y 30 caracteres "
            }
        }
    },
        tipo: {
            type: DataTypes.ENUM('argentina', 'oriental', 'europea', 'otra'),
            allowNull: false,
            validate: {
                customValidator(value) {
                    const validValues = ['argentina', 'oriental', 'europea', 'otra'];
                    if (!validValues.includes(value)) {
                        throw new Error('La receta debe ser oriental, europea, argentina, u otra (sin especificar caul)');
                    }
                }
            }
        },
    llevaCarne:{
        type:DataTypes.BOOLEAN,
        allowNull :false
    }
},
{ sequelize:connection,
    modelName:'Receta',
    timestamps: false

}
)

export default Receta;