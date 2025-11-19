const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nusantara-mart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // log query
});

module.exports = sequelize;
