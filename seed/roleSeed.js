import {Role} from "../models/index.js"

async function roleSeed (){
await Role.bulkCreate([{id:1,name:'admin'},
    {id:2,name:'user'}, {id:3,name:'editor'}])
}


export default roleSeed;