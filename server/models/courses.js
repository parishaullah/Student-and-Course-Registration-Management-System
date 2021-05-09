const Sequelize = require('sequelize');
const db = require('../config/database');

const course = db.define('course', {
    course_id: {
        type: Sequelize.STRING,
        primarykey: true,
        allowNull: false
    },
    course_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    course_dept_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    course_credit: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    // Other model options go here
});


module.exports = course;