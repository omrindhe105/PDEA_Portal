const express = require('express');
const route = express.Router();

const { studentRegistration, studentLogin ,studentLogout } = require('../controllers/studentController');

route.post("/studentRegistration", studentRegistration);
route.post("/studentLogin", studentLogin);
route.post("/logout", studentLogout);

module.exports = route;
