const Sequelize=require('sequelize');
const db= require('../config/database');

const Takes = db.define('takes', {
  student_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  course_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  section_id: {
    type: Sequelize.INTEGER,
    allowNull: false

  },
  course_updated_by_user_id: {
    type: Sequelize.INTEGER,
    allowNull: false

  },
}, {
  // Other model options go here
});

module.exports=Takes;