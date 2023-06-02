const express = require("express");
const orderRoute = express.Router();

//  const {getUser, getAllUser, createUser,updateUser} = require('../controllers/userController');
const orderController = require("../controllers/orderController");

// get
orderRoute.get("/getorder", orderController.getAllOrder);

module.exports = orderRoute;
