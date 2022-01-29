const express =require('express');
const mongoose = require('mongoose');
const app=express();

const signupRoute = require('./routes/signup');
const doctorRoute = require('./routes/doctor');

app.use((req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
})

app.use('/signup' , signupRoute);
app.use('/doctor' , doctorRoute);
app.use('/',(req,res,next)=>{
    res.send({response : 'ok'});
});

mongoose.connect('mongodb+srv://Siddharth999:Siddharth18*@cluster0.wmel5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(result => {
  console.log('Connected');
  app.listen(3000);
})
