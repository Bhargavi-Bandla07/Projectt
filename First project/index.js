const mongoose = require("mongoose")
const zod = require("zod");

mongoose.connect("mongodb+srv://ayush:ayush%40123@cluster0.zcug8.mongodb.net/");
const User = mongoose.model('User',{
  name : String,
  age  : String,
  id   : String,
});
