const express = require("express");
const foodRoute = express.Route;

const handelFood = require("../controllers/foodController");
foodroute.get("/food", handelFood.getAllFood);

module.exports = foodRoute;
