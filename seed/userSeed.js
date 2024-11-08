import {User} from "../models/index.js"

async function userSeed(){
    await User.bulkCreate([{
        name:'Raul',
        mail:'maildeRaul@hotmail.com',
        password:'passdeRaul123',
        RoleId:2
    }])
}

export default userSeed;