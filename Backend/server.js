const express = require('express');
const app = express();
require('dotenv').config();
const studentLogin = require("./controllers/studentController");


// Set the views directory (where index.ejs is located)


app.use(express.urlencoded({extended : true}) )   // handle form data
app.use(express.json());


app.get("/studentLogin",studentLogin);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});