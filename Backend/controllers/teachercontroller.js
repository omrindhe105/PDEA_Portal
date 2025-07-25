const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
const { Teacher } = require('../models/studentSchema');




const teacherRegisration = async(req , res)=>{

    const { name, email, department, mobile, password } = req.body;

    const existingTeacher = await Teacher.findOne({
        email: email
    }); 

    if(existingTeacher){
        return res.status(400).json({
            message: "Teacher already exists with this email"
        });
    }

    const hashedPassword =await bcrypt.hash(password,10);
    const newTeacher = new Teacher({
        name,
        email,
        department,
        mobile,
        password: hashedPassword
    });

    await newTeacher.save();
     res.status(200).json({
        message: "Teacher registered successfully",
        teacher: {
            name: name,
            email: email,
            department: department,
            mobile: mobile
        }
    });
}




const teacherLogin = async(req, res) => {

    const {email , password} = req.body;

     const teacher = await Teacher.findOne({email: email});

     if(!teacher){
        return res.send("Teacher not found with this email");
     }

    const ispasswordMatch = await bcrypt.compare(password, teacher.password);
    if(!ispasswordMatch){
        return res.status(400).send("Invalid password");
    }           

    const token = jwt.sign({ email:email}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie("token", token)
    res.status(200).json({
        message: "Teacher logged in successfully",
        token: token,
        teacher: {
            name: teacher.name,
            email: teacher.email,
            department: teacher.department,
            mobile: teacher.mobile
        }
    });
}

const teacherLogout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "Strict"
    });
    res.status(200).json({ message: "Teacher logged out successfully" });
};

module.exports ={teacherLogin, teacherRegisration, teacherLogout}