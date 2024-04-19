const mongoose = require("mongoose")
const zod = require("zod");
const express = require("express");
const app = express();

mongoose.connect("mongodb+srv://ayush:ayush%40123@cluster0.zcug8.mongodb.net/");
const User = mongoose.model('User',{
  email: String,
  password: String,
});

email: document.getELementById("email");
password: document.getElementById("password");
const user = User({
  email: email,
  password: password,
})

app.get("/about" , function(req,res)
{
  res.send("About the Website");
})

app.listen(3000);
