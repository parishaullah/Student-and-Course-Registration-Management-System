const Sequelize=require('sequelize');
const db= require('../config/database');

const Prereqs = db.define('prereqs', {
  course_id: {
    type: Sequelize.STRING,
    allowNull: false
},
  prereq_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports=Prereqs;