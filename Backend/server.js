const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const dbConncction = require('./config/db');


// const studentRegistration = require("./controllers/studentController");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoute");
const teacherRoutes = require("./routes/teacherRoutes");

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