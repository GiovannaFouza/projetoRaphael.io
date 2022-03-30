const Sequelize = require('sequelize')


const sequelize = new Sequelize('trabdsen', 'root', '5588', {
	host: 'localhost',
	dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!")
  }).catch((error) => {
    console.log("Erro ao conectar com DB!", error)
  })


  module.exports = sequelize;