const Sequelize = require('sequelize');
const database = require('../db');
 
const Account = database.define('account', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // CHECAR COMO FAZ A RELAÇÃO DE CHAVE EXTRANGEIRA
    // user_id: {
    //     // type: Sequelize.INTEGER,
    //     // allowNull: false,
    //     // foreignKey: true
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING
    },
    open_date: {
        type: Sequelize.DATEONLY
    },
    balance: {
        type: Sequelize.DOUBLE
    }
})
 
module.exports = Account;