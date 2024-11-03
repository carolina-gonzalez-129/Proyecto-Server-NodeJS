import { Sequelize, Model, DataTypes } from 'sequelize';
import connection from "../connection/connection.js";

class Receta extends Model {}
Receta.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5, 30],
                msg: "El nombre de la receta debe constar de entre 5 y 30 caracteres"
            }
        }
    },
    tipo: {
        type: DataTypes.ENUM('argentina', 'oriental', 'europea', 'otra'),
        allowNull: false,
        validate: {
            isIn: {
                args: [['argentina', 'oriental', 'europea', 'otra']],
                msg: 'La receta debe ser argentina, oriental, europea o "otra".'
            }
        }
    },
    llevaCarne: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}, {
    sequelize: connection,
    modelName: 'Receta',
    timestamps: false
});

export default Receta;
