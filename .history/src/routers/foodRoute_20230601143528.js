const express = require("express");
const foodRoute = express.Route();

const handelFood = require("../controllers/foodController");
foodRoute.get("/getfood", handelFood.getAllFood);

module.exports = foodRoute;
