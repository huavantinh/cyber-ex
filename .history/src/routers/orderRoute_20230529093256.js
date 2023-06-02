const express = require("express");
const orderRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const orderController = require("../controllers/orderController");

// get
orderRoute.get("/getOrder", orderController.getAllOrder);
orderRoute.get("/createOrder", orderController.createOrder);

module.exports = orderRoute;
