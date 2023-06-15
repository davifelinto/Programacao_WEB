const Sequelize = require('sequelize');
const database = require('../db');
 
const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // CHECAR COMO FAZ A RELAÇÃO DE CHAVE EXTRANGEIRA
    // person_id: {
    //     // type: Sequelize.INTEGER,
    //     // allowNull: false,
    //     // foreignKey: true
    //     references: {
    //         model: 'person',
    //         key: 'id'
    //     }
    // },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
})
 
module.exports = User;