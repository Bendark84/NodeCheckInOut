const { Sequelize, DataTypes } = require('sequelize');

//Establecer la conexion a la base de datos

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Sbm84',
  port: 5432,
  database: 'checkInOut',
  logging: false,
});

module.exports = { db, DataTypes };
