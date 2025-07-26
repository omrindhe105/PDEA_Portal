const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String,
    attendance: 
        {
            date: { type: Date, default:Date.now, required: true },
            present: { type: Boolean, required: true }
        }
    
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