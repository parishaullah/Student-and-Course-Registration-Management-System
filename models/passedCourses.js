const Sequelize=require('sequelize');
const db= require('../config/database');

const PassedCourses = db.define('passedCourses', {
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
  course_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports=PassedCourses;