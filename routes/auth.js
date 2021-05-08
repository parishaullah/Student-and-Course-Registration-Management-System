/** Express router providing user related routes
 * @module routes/auth
 * @requires express
 * @requires courseRegistartion
 * @requires bcrypt
 * @requires jsonwebtoken
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
require("dotenv").config();
const db = require('../db'); 

/**
 * bcrypt module
 * @const
 */
const bcrypt = require("bcrypt");

/**
 * jwt module
 * @const
 */
const jwt = require("jsonwebtoken");


/**
 * users module
 * @const
 */
const Users=require('../models/users');

/**
 * Route serving login 
 * @name post/login
 * @function
 * @memberof module:routes/auth
 * @inner
 * @param {string} path - Express path
 * @param
 */
router.post("/",async(req,res)=>{
        let user= await Users.findOne({ where: {  email: req.body.email } });
        if (!user) return res.status(400).send('Invalid email or password.');
       
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');
        //let id=user.user_id
        const token = jwt.sign({ id: user.user_id},'jwtPrivateKey');
        res.send(token);
});

module.exports = router;