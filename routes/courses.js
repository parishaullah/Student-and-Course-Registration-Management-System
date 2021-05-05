const express = require("express");
const router = express.Router();
const db = require('../db'); 

let currentTime=new Date();
let uid=0;

//Get all courses
router.get("/",async(req,res)=>{
    
    try{
        const result= await db.query("SELECT * FROM courses");
        //console.log(result);
        res.status(200).json(
            result.rows
           );
    } catch(err){
       // console.log(err);
    }
});


//Get Particual course
router.get("/:id",async(req,res)=>{
    
    try{
        const result= await db.query("SELECT * FROM courses WHERE course_id=$1",[req.params.id]);
       // console.log(result);
        res.status(200).json(
            result.rows[0]
           );
    } catch(err){
       // console.log(err);
    }
});

//Add course
router.post("/",async(req,res)=>{
    //console.log(req.body);
    
    try{
        const result=await db.query('INSERT INTO courses (course_title, course_description, course_price, course_rating, course_created_by_user_id, course_updated_by_user_id, last_update_time) values ($1,$2,$3,$4,$5,$6,$7) returning *',
        [req.body.course_title,req.body.course_description,req.body.course_price,req.body.course_rating,req.body.course_created_by_user_id,req.body.course_updated_by_user_id,currentTime]);
        //console.log(result);
        res.status(200).json(
            result.rows[0]
            );
    } catch(err){
        //console.log(err);
    }
});


//Update Course
router.put("/:id",async(req,res)=>{
    //console.log(req.body);
    
    try{
        const result=await db.query('UPDATE courses set course_title= $1 , course_description=$2 , course_price=$3 , course_rating=$4, course_updated_by_user_id =$5, last_update_time=$6  WHERE course_id=$7 returning *', [req.body.course_title,req.body.course_description,req.body.course_price,req.body.course_rating, req.body.course_updated_by_user_id,currentTime, req.params.id]);
       // console.log(result);
        res.status(200).json(
            result.rows[0]
            );
    } catch(err){
        //console.log(err);
    }
});

module.exports = router;