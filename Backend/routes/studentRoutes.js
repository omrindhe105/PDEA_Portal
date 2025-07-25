const express = require('express');
const route = express.Router();

const { studentRegistration, studentLogin } = require('../controllers/studentController');

route.post("/studentRegistration", studentRegistration);
route.post("/studentLogin", studentLogin);
route.get("/", (req, res) => {
    res.send("Welcome to Student Portal");
});

module.exports = route;
