const express=require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use("/public",express.static(__dirname + "/public"));

app.get("/",function(req,res){
  res.render("home");
});

app.get("/contact",function(req,res){
  res.render( "contact");
});

app.get("/ForMen",function(req,res){
  res.render("ForMen");
});

app.get("/ForWomen",function(req,res){
  res.render("ForWomen");
});

app.get("/SignUp",function(req,res){
  res.render("SignUp");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
