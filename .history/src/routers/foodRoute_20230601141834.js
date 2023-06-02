const express = require("express");
const foodroute = express.Route;

const handelFood = require("../controllers/foodController");
foodroute.get("/food", handelFood.getAllFood);
