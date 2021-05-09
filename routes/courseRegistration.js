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

/**
 * PassCourses module
 * @const
 */
const PassedCourses = require("../models/passedCourses");

/**
 * Takes module
 * @const
 */
 const Prereqs = require("../models/prerequisite");

/**
 * Route serving taken courses
 * @name get/courseRegistration
 * @function
 * @memberof module:routers/courseRegistration
 * @inner
 * @param {string} path - Express path
 * @param {object} take - taken Courses
 * @param {object} result - taken all Courses
 */
router.get("/:id",async(req,res)=>{
    
    try{
      

        let take= await Takes.findAll({ where: {student_id: req.params.id}});
        if (take!==null)  return res.status(400).send("Student did not take any course!");
        
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
 * @param {object} take - Choosen Course
 * @param {object} result - newly Choosen Course
 */
router.post("/",async(req,res)=>{
    try{
      let hasPrereq=true;
      let prereqs= await Prereqs.findAll({ where: {course_id:  req.body.course_id}});
      let passedCourses= await PassedCourses.findAll({ where: {course_id:  req.body.course_id}});
      prereqs.forEach( 
        (preCourse) => { 
          passedCourses.forEach( 
            (passcourse) => { 
              if (preCourse.course_id==passcourse.course_id) hasPrereq= true;
              else hasPrereq= false;
            }
          );
        }
      );

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