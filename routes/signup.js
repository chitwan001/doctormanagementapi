const express = require('express');
const routes = express.Router();
const signupController = require('../controller/signup');

routes.post('/doctor' ,signupController.addDoctor )
routes.post('/user' , signupController.addUser )


module.exports = routes
