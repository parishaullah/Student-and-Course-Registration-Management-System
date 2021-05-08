/** Express router providing user related routes
 * @module routers/courseRegistration
 * @requires express
 * @requires courseRegistartion
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
 * Takes module
 * @const
 */
const Takes = require("../models/courseRegistration");
const Students=require('../models//students');

//Get particular user
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

/**
 * Route serving taken courses
 * @name get/courseRegistration
 * @function
 * @memberof module:routers/courseRegistration
 * @inner
 * @param {string} path - Express path
 * @param
 */
router.get("/:id",async(req,res)=>{
    
    try{

        let take= await Takes.findAll({
            where: {
                student_id: req.params.id
              }
            })
        if (take==+null)  return res.status(400).send("Student does not exist!");
        
        const result= await Takes.findAll({
            where: {
              student_id: req.params.id
            }
          });;
        res.status(200).json(
            result
           );
    } catch(err){
        console.log(err);
    }
});


/**
 * Route serving course Registration
 * @name post/courseRegistration
 * @function
 * @memberof module:routers/courseRegistration
 * @inner
 * @param {string} path - Express path
 * @param
 */
router.post("/",async(req,res)=>{
    try{
        const take = await Takes.create({ student_id: req.body.student_id, course_id: req.body.course_id, section_id: req.body.section_id, course_updated_by_user_id: req.body.course_updated_by_user_id});
    
        console.log(take);

        const result= await Takes.findAll({
            where: {
              student_id: req.body.email
            }
          })
        
        res.status(200).json(
            result
           );
    } catch(err){
        console.log(err);
    }
});

module.exports = router;