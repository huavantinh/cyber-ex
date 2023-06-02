const express = require("express");
const likeRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const likeController = require("../controllers/likeController");

// get
likeRoute.get("/getLike", likeController.getLikeList);
//get id
likeRoute.get("/getLike/:id", likeController.getLikeUser);
//get like by restaurant
likeRoute.get("/getLikeRes/:id", likeController.getLikeRes);

//get id
// likeRoute.get("/getLikeId/:id", likeController.getLikeUser);

//post
likeRoute.post("/createLike", likeController.createLike);

module.exports = likeRoute;
