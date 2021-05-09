/** Express router providing user related routes
 * @module routers/students
 * @requires express
 * @requires Students
 */

/**
 * express module
 * @const
 */
 const express = require("express");

 /**
  * router module
  * @const
  */
 const router = express.Router();
 
 /**
  * Students module
  * @const
  */
const Students=require('../models/students');


/**
 * Route serving taken courses
 * @name get/students
 * @function
 * @memberof module:routers/students
 * @inner
 * @param {string} path - Express path
 * @param
 */
router.get("/:id",async(req,res)=>{
    
  try{

      let student= await Students.findOne({where: { student_id: req.params.id}});
      if (!student)  return res.status(400).send("Student does not exist!");
      
      res.status(200).json(
          student
         );
  } catch(err){
      console.log(err);
  }
});

module.exports = router;