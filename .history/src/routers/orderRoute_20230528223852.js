const express = require("express");
const oderRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const orderController = require("../controllers/orderController");

// get
likeRoute.get("/getLike", orderController.getOrder);

module.exports = orderController;
