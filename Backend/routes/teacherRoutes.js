/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express"); 
const route = express.Router();
const {teacherRegisration, teacherLogin , teacherLogout}= require("../controllers/teachercontroller")


route.post("/register",teacherRegisration);
route.post("/login",teacherLogin); 
route.post("/logout", teacherLogout);  
     


module.exports = route;
