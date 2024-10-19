import {Sequelize} from 'sequelize'

const connection = new Sequelize('nueva', 'caro', 'teodiosequele32040!!!!', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
});

//el profe uso el root como user, yo use mi usuario caro a quien le conferi todos los privilegios de un admin

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default connection;