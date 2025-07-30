/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express"); 
const route = express.Router();
const {teacherRegisration, teacherLogin , teacherLogout ,teacherDetails}= require("../controllers/teachercontroller");
const auth = require("../middleware/auth");


route.post("/register",teacherRegisration);
route.post("/login",teacherLogin); 
route.post("/logout", teacherLogout); 
route.get("/getTeacher",auth, teacherDetails)
     


module.exports = route;
