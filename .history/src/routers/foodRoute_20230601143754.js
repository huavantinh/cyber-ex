const express = require("express");
const foodRoute = express.Router();

const handelFood = require("../controllers/foodController");
foodRoute.get("/getfood", handelFood.getAllFood);

module.exports = foodRoute;
