const express = require('express');
const courses = require('../routes/courses');

module.exports = function(app) {
    app.use(express.json());
    app.use('/courses', courses);
}