const  jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const student = require('../models/studentSchema');

const studentLogin = async (req , res)=>{
    const {name, email,mobile,password} = req.body;

    res.send(`Name: ${name}, Email: ${email}, Mobile: ${mobile}, Password: ${password}` );
}

module.exports = studentLogin;