const express = require("express");
const router = express.Router();
const db = require('../config/database'); 
const Users=require('../models/users')
const bcrypt = require("bcrypt");

//Get all users
router.get("/",async(req,res)=>{
    
    try{
        const result= await Users.findAll();
        console.log(result);
        res.status(200).send(result);
    } catch(err){
       console.log(err);
    }
});

//Get particular user
router.get("/:id",async(req,res)=>{
    
    try{
        
        const result= await Users.findAll({
            where: {
              user_id: req.params.id
            }
          });;
       // console.log(result);
        res.status(200).json(
            result
           );
    } catch(err){
       // console.log(err);
    }
});

//Create user
router.post("/",async(req,res)=>{
    //console.log(req.body);
    try{
        let user= await Users.findAll({
            where: {
                email: req.body.email
              }
            })
        if (user)  return res.status(400).send("User already registered");
       
       
        else{
        const salt = await bcrypt.genSalt(10);
        pass = await bcrypt.hash(req.body.password, salt);
        const user = await Users.create({ email: req.body.email,password: pass, user_name: req.body.user_name, user_status: req.body.user_status});
    
        
        console.log(user);

        
        const result= await Users.findAll({
            where: {
              email: req.body.email
            }
          })
        
        res.status(200).json(
            result
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
        const result= await Users.update({ email: req.body.email, password: pass, user_name: req.body.user_name, user_status: req.body.user_status }, {
            where: {
                user_id: req.params.id
            }
          });
         //const result=await db.query('UPDATE users set email= $1 , password=$2 , user_name=$3 , user_status=$4 WHERE user_id=$5 returning *', [req.body.email,pass,req.body.user_name,req.body.user_status,req.params.id]);
        // console.log(result);
        const updatedResult= await Users.findAll({
            where: {
                user_id: req.params.id
            }
          })
        
        res.status(200).json(
            updatedResult
           );
     } catch(err){
        // console.log(err);
     }
 });

module.exports = router;