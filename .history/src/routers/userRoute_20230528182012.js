 const express = require('express');
 const userRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
 const userController = require('../controllers/userController');

 //get 
 userRoute.get('/getUser', userController.getAllUser)
 //get id
 userRoute.get('/getUser/:id', getUser)


 //post 
 userRoute.post('/createUser', createUser)
//update
userRoute.put('/updateUser', updateUser)

 module.exports = userRoute