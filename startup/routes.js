const express = require('express');
const users = require('../routes/users');
const students = require ('../routes/students')
const courses = require ('../routes/courses')
const auth = require('../routes/auth');
const authenticate =require('../middleware/auth');

/*const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const returns = require('../routes/returns');
const error = require('../middleware/error');
*/
module.exports = function(app) {
  //app.use(authenticate);
  app.use(express.json());
  app.use('/users', users);
  app.use('/students',students);
  app.use('/courses',courses);
  app.use('/auth',auth);
 
 /* app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);*/
}