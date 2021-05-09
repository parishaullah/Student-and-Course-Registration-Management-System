const express = require('express');
const users = require('../routes/users');
const students = require('../routes/students');
const auth = require('../routes/auth');
const courseRegistrations = require('../routes/courseRegistration');
const authenticate =require('../middleware/auth');


module.exports = function(app) {
  //app.use(authenticate);
  app.use(express.json());
  app.use('/users', users);
  app.use('/students', students);
  app.use('/courseregistrations',courseRegistrations );
  app.use('/auth',auth);
 
 /* app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);*/
}