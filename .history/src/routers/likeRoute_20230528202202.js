const express = require("express");
const likeRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const likeController = require("../controllers/likeController");

// get
likeRoute.get("/getLike", likeController.getLikeList);
//get id
// likeRoute.get("/getLike/:id", userController.getUser);

//post
likeRoute.post("/createLike", likeController.createLike);
//update
// likeRoute.put("/updateUser", userController.updateUser);

module.exports = likeRoute;
