const express = require("express");
const router = express.Router(); 
const auth = require('../middleware/auth');
const Users=require('../models/users');
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
  
        let user= await Users.findOne({where: { user_id: req.params.id}});
        if (!user)  return res.status(400).send("User does not exist!");
        
        res.status(200).json(
            user
           );
    } catch(err){
        console.log(err);
    }
  });

//Create user
router.post("/",auth,async(req,res)=>{
    try{
        let exsistingUser= await Users.findOne({ where: {  email: req.body.email } });
        if (exsistingUser!==null)  return res.status(400).send("User already registered");

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
           );
    } catch(err){
        console.log(err);
    }
});

//Update User
router.put("/:id",async(req,res)=>{
     
     try{

         let user= await Users.findOne({where: { user_id: req.params.id}});
        if (!user)  return res.status(400).send("User does not exist!");

        const salt = await bcrypt.genSalt(10);
        pass = await bcrypt.hash(req.body.password, salt);
        const result= await Users.update({ email: req.body.email, password: pass, user_name: req.body.user_name, user_status: req.body.user_status }, {
            where: {
                user_id: req.params.id
            }
          });
        const updatedResult= await Users.findAll({
            where: {
                user_id: req.params.id
            }
          })
        
        res.status(200).json(
            updatedResult
           );
     } catch(err){
         console.log(err);
     }
 });

 //Delete user
router.delete("/:id",async(req,res)=>{
    
    try{

        let user= await Users.findOne({where: { user_id: req.params.id}});
        if (!user)  return res.status(400).send("User does not exist!");

        await Users.destroy({
            where: {
                user_id: req.params.id
            }
          });
        
        
        res.status(200).send("Successfully Deleted");
    } catch(err){
        console.log(err);
    }
});

module.exports = router;