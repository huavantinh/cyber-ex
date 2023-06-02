const express = require("express");
const userRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const userController = require("../controllers/userController");

//get
userRoute.get("/getUser", userController.getAllUser);
//get id
userRoute.get("/getUser/:id", userController.getUser);

//post
userRoute.post("/createUser", userController.createUser);
//update
userRoute.put("/updateUser/:id", userController.updateUser);

module.exports = userRoute;
