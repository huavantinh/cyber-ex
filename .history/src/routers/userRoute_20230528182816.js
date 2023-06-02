 const express = require('express');
 const userRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
 const userController = require('../controllers/userController');

 //get 
 userRoute.get('/user', userController.getAllUser)
 //get id
 userRoute.get('/user/:id', userController.getUser)


 //post 
 userRoute.post('/user', userController.createUser)
//update
userRoute.put('/user', userController.updateUser)
userRoute.delete('/user', userController.updateUser)

 module.exports = userRoute