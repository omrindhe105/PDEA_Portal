const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String,
})
 const Student= mongoose.model("Student",studentSchema)


const teacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    mobile:Number,
    password:String,    
})

const Teacher = mongoose.model("teacher",teacherSchema)

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})  

const Admin = mongoose.model("admin", adminSchema)


module.exports = {Student,Teacher, Admin}