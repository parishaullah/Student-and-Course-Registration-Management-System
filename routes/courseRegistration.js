const express = require("express");
const router = express.Router();
const Takes = require("../models/courseRegistration");


//Selected courses 
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
//Course Registration
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