import { Sequelize, Model,DataTypes} from 'sequelize'
import connection from "../connection/connection.js";

class Role extends Model{}

Role.init({
        name : {
            type: DataTypes.STRING,
            allowNull: false ,
           defaultValue:"user"
        },

    },
    { sequelize:connection,
        modelName:'Role',
        timestamps: false

    }

)


export default Role;