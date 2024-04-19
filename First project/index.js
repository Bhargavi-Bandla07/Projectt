const mongoose = require("mongoose")
const zod = require("zod");

mongoose.connect("mongodb+srv://ayush:ayush%40123@cluster0.zcug8.mongodb.net/");
const User = mongoose.model('User',{
  email : String,
  password  : String,
});

email : document.getELementById("email");
password : document.getElementById("password");
const user = User({
  email : email,
  password : passsword,
})
