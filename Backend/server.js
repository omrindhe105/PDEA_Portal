const express = require('express');
const app = express();
require('dotenv').config();
const dbConnection = require('./config/db');
// const studentRegistration = require("./controllers/studentController");
const studentRoutes = require("./routes/studentRoutes");

// Set the views directory (where index.ejs is located)


app.use(express.urlencoded({extended : true}) )   // handle form data
app.use(express.json());
dbConnection()

app.use("/student",studentRoutes);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});