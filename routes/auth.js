const express = require("express");
const router = express.Router();
require("dotenv").config();
const db = require('../db'); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/",async(req,res)=>{
        let user= await db.query('SELECT email FROM users WHERE email = $1',[req.body.email]);
        if (!user.rows[0]) return res.status(400).send('Invalid email.');
       
        let pass= await db.query('SELECT password FROM users WHERE email = $1',[req.body.email]);
        const validPassword = await bcrypt.compare(req.body.password, pass.rows[0].password);
         if (!validPassword) return res.status(400).send('Invalid password.');
         let id=user.rows[0].id
        const token = jwt.sign({id},'jwtPrivateKey');
         res.send(token);
});

module.exports = router;