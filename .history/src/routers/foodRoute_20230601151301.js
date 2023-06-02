const express = require("express");
const foodRoute = express.Router();

const handelFood = require("../controllers/foodController");
foodRoute.get("/getFood", handelFood.getAllFood);

module.exports = foodRoute;
