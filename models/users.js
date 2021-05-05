const Sequelize=require('sequelize');
const db= require('../config/database');

const Users = db.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false

  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false

  },
  user_status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
 
  }
}, {
  // Other model options go here
});

module.exports=Users;