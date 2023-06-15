const Sequelize = require('sequelize');
const database = require('../db');
const User = require('./user')

const Person = database.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    birth_date: {
        type: Sequelize.DATEONLY
    },
    phone: {
        type: Sequelize.INTEGER
    },
    address: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
})

User.belongsTo(Person) //person_id

module.exports = Person;