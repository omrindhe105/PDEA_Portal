const express = require("express"); 
const route = express.Router();
const {teacherRegisration, teacherLogin , teacherLogout}= require("../controllers/teachercontroller")


route.post("/teacherRegistration",teacherRegisration);
route.post("/teacherLogin",teacherLogin); 
route.post("/logout", teacherLogout);       


module.exports = route;
