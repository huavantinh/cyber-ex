const express = require("express");
const userRoute = express.Router();
// userRoute.use(express.json());
//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const userController = require("../controllers/userController");

//get
userRoute.get("/getUser", userController.getAllUser);
//get id
userRoute.get("/getUser/:id", userController.getUser);

//post
userRoute.post("/createUser", userController.createUser);
//deleteUser
userRoute.delete("/deleteUser/:user_id", userController.deleteUser);

//update
userRoute.put("/updateUser/:user_id", userController.updateUser);

module.exports = userRoute;
