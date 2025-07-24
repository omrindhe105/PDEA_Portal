const mongoose = require("mongoose");
const dotenv = require("dotenv");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    .then(()=>console.log("Connected to the database successfully"))
    
  );
  } catch (err) {
    comsole.log("Error in connecting to database", err);
  }
};

module.exports = dbConnection;
