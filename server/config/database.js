const { Sequelize } = require('sequelize');

module.exports = new Sequelize('varsity', 'postgres', 'CSE327.8', {
    host: 'localhost',
    dialect: 'postgres'
});

