const express = require("express");
const router = express.Router();
const db = require('../db'); 

let currentTime=new Date();

//Get all students
router.get("/",async(req,res)=>{
    
    try{
        const result= await db.query("SELECT * FROM students");
        //console.log(result);
        res.status(200).json(
            result.rows
           );
    } catch(err){
        //console.log(err);
    }
});


//Get particular student
router.get("/:id",async(req,res)=>{
    
    try{
        const result= await db.query("SELECT * FROM students WHERE student_id=$1",[req.params.id]);
        //console.log(result);
        res.status(200).json(
             result.rows[0]
            );
    } catch(err){
       // console.log(err);
    }
});


//Create students
router.post("/",async(req,res)=>{
    //console.log(req.body);
    
    try{
        const result=await db.query('INSERT INTO students (student_first_name, student_last_name, student_grade_level, student_university_name, student_phone_number, student_email, student_address, student_city, student_state, student_country, student_created_by_user_id, student_updated_by_user_id,last_update_time) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *',
        [req.body.student_first_name,req.body.student_last_name,req.body.student_grade_level,req.body.student_university_name,req.body.student_phone_number,req.body.student_email ,req.body.student_address ,req.body.student_city ,req.body.student_state ,req.body.student_country ,req.body.student_created_by_user_id ,req.body.student_updated_by_user_id ,currentTime]);
        //console.log(result);
        res.status(200).json(
            result.rows[0]
            );
    } catch(err){
        //console.log(err);
    }
});

//Update Students
router.put("/:id",async(req,res)=>{
   // console.log(req.body);
    
    try{
        const result=await db.query('UPDATE students set student_first_name= $1 , student_last_name=$2 , student_grade_level=$3 , student_university_name=$4 , student_phone_number =$5, student_email=$6, student_address=$7, student_city=$8, student_state=$9, student_country=$10, student_updated_by_user_id=$11,last_update_time=$12 WHERE student_id=$13 returning *', [req.body.student_first_name,req.body.student_last_name,req.body.student_grade_level,req.body.student_university_name,req.body.student_phone_number,req.body.student_email ,req.body.student_address ,req.body.student_city ,req.body.student_state ,req.body.student_country,req.body.student_updated_by_user_id ,currentTime,req.params.id]);
       // console.log(result);
        res.status(200).json(
            result.rows[0]
            );
    } catch(err){
       // console.log(err);
    }
});

module.exports = router;