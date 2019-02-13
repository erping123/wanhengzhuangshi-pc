const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const session=require("express-session");
const user=require('./routes/user');
const products=require('./routes/products');
var app=express();
var server=app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(cors({
    origin:"http://127.0.0.1:3000"
}));
app.use(session({
    secret:"128位随机字符",
    resave:false,
    saveUninitialized:true
}));
app.use("/user",user);
app.use("/products",products);