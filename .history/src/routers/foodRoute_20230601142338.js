const express = require("express");
const foodRoute = express.Route();

const handelFood = require("../controllers/foodController");
foodRoute.get("/food", handelFood.getAllFood);

module.exports = foodRoute;
