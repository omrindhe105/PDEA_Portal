/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
// import express from 'express';
const app = express();
// const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// import cookieParser from 'cookie-parser';
const dbConncction = require('./config/db');
// import dbConncction from './config/db.js';
const cors = require('cors');
// import cors from 'cors';





// const studentRegistration = require("./controllers/studentController");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoute");
const teacherRoutes = require("./routes/teacherRoutes");
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(cookieParser());
app.use(express.urlencoded({extended : true}) )   // handle form data
app.use(express.json());
 dbConncction()


app.use("/admin", adminRoutes)
app.use("/teacher",teacherRoutes)
app.use("/student",studentRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});