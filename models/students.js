const Sequelize=require('sequelize');
const db= require('../config/database');

const Students = db.define('students', {
  student_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
student_name: {
    type: Sequelize.STRING,
    allowNull: false

},
student_cgpa: {
    type: Sequelize.DECIMAL,
    allowNull: false

},

 
  student_semester: {
    type: Sequelize.INTEGER,
    allowNull: false

  },
  student_total_credit: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  student_phone_number: {
    type: Sequelize.BIGINT,
    allowNull: false

  },
  student_email: {
    type: Sequelize.STRING,
    allowNull: false

  },
  student_address: {
    type: Sequelize.STRING,
    allowNull: false

  },
}, {
  // Other model options go here
});

module.exports=Students;