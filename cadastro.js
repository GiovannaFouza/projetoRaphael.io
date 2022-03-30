const Sequelize = require('sequelize')
const database = require("./db");

 
const cadastro = database.define('cadastro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING
    },
    unsername: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
    })
 
module.exports = cadastro;
