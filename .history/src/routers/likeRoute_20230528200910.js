const express = require("express");
const likeRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const likeController = require("../controllers/userController");

//get
// userRoute.get("/getUser", userController.getAllUser);
// //get id
// userRoute.get("/getUser/:id", userController.getUser);

// //post
// userRoute.post("/createUser", userController.createUser);
// //update
// userRoute.put("/updateUser", userController.updateUser);

module.exports = likeRoute;
