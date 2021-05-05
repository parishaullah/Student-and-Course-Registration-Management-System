const { Sequelize } = require('sequelize');


module.exports= new Sequelize('varsity', 'postgres', '02021994', {
    host: 'localhost',
    dialect: 'postgres' 
  });