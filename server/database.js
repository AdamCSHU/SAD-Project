const mongoose = require("mongoose");
const connectDB = async() => {
    try{  const conn = mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("connected to database");} catch(error){
        console.log(error);
    }
  
}
module.exports = connectDB;

// mongoose.connect("mongodb://127.0.0.1:27017");
// mongoose.connection.on('connected', () => console.log('Connected'));
// mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
