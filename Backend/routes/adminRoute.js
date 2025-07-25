const express = require("express");
const route = express.Router();
const { adminRegistration, adminLogin,adminLogout ,teacherlist} = require('../controllers/adminController');

route.post("/adminregistration", adminRegistration);
route.post("/adminlogin", adminLogin);
route.post("/logout", adminLogout); // Admin logout route
route.get("/teacherlist", teacherlist); // Route to get the list of teachers


module.exports = route;
