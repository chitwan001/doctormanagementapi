const express=require('express');
const routes=express.Router();
const doccontroller=require('../controller/doctor');
routes.get('/get',doccontroller.getdoctor);
module.exports=routes;
