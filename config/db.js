const mongoose = require("mongoose");
const config = require("config");
const uri = config.get("mongoURL");

const connectDB = async() => {
  try{
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    
    console.log("MongoDB Connected...");
  }catch(error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;