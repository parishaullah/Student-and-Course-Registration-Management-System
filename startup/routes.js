const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const courseRegistrations = require('../routes/courseRegistration');
const authenticate =require('../middleware/auth');


module.exports = function(app) {
  //app.use(authenticate);
  app.use(express.json());
  app.use('/users', users);
  app.use('/courseregistrations',courseRegistrations );
  app.use('/auth',auth);
 
 /* app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);*/
}