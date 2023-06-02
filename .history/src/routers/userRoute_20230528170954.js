 const express = require('express');
 const userRoute = express.Router();

 const {getUser, createUser,updateUser} = require('../controllers/userController');

 //get 
 userRoute.get('/getUser', getUser)
 //get id
 userRoute.get('/getUser/:id', getUser)


 //post 
 userRoute.post('/createUser', createUser)
//update
userRoute.put('/updateUser', updateUser)

 module.exports = userRoute