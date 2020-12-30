var mongoose = require('mongoose');


Mongo_url ="mongodb+srv://everything420:everything420@cluster0.o99m5.mongodb.net/test";
  
  const connectDB = async()=> {
      await mongoose.connect(Mongo_url, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Connected To Mogoose--");
  }

  module.exports = connectDB;