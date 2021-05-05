const express = require("express");
const router = express.Router();
const db = require('../db'); 
const bcrypt = require("bcrypt");

//Get all users
router.get("/",async(req,res)=>{
    
    try{
        const result= await db.query("SELECT * FROM users");
        //console.log(result);
        res.status(200).json(
            result.rows
           );
    } catch(err){
       // console.log(err);
    }
});

//Get particular user
router.get("/:id",async(req,res)=>{
    
    try{
        const result= await db.query('SELECT * FROM users WHERE user_id = $1',[req.params.id]);
       // console.log(result);
        res.status(200).json(
            result.rows[0]
           );
    } catch(err){
       // console.log(err);
    }
});

//Create user
router.post("/",async(req,res)=>{
    //console.log(req.body);
    try{
        let user= await db.query('SELECT email FROM users WHERE email = $1',[req.body.email]);
       // console.log(`user.rows[0].....${user.rows[0].email}`);
        if (user.rows[0])  return res.status(400).send("User already registered");
       
       
        else{
        const salt = await bcrypt.genSalt(10);
        pass = await bcrypt.hash(req.body.password, salt);
        user=await db.query('INSERT INTO users (email,password, user_name, user_status) values ($1,$2,$3,$4) returning *',[req.body.email,pass,req.body.user_name,req.body.user_status]);
        
        console.log(user);
        
        res.status(200).json(
            user.rows[0]
           );}
    } catch(err){
        console.log(err);
    }
});

//Update User
router.put("/:id",async(req,res)=>{
    // console.log(req.body);
     
     try{
        const salt = await bcrypt.genSalt(10);
        pass = await bcrypt.hash(req.body.password, salt);
         const result=await db.query('UPDATE users set email= $1 , password=$2 , user_name=$3 , user_status=$4 WHERE user_id=$5 returning *', [req.body.email,pass,req.body.user_name,req.body.user_status,req.params.id]);
        // console.log(result);
         res.status(200).json(
             result.rows[0]
             );
     } catch(err){
        // console.log(err);
     }
 });

module.exports = router;