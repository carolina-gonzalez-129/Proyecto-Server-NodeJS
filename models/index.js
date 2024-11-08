import Role from "./Role.js";
import User from "./User.js";
import Receta from "./Receta.js";

//aca voy a crear las interacciones entre las tablas


Role.hasMany(User);
User.belongsTo(Role);


User.hasMany(Receta);
Receta.belongsTo(User);

export {Role,User,Receta}