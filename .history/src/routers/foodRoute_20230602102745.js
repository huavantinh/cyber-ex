const express = require("express");
const foodRoute = express.Router();
const multer = require("multer");
const upload = multer({ dest: process.cwd() + "/public/img" });

const handelFood = require("../controllers/foodController");
foodRoute.get("/getFood", handelFood.getAllFood);
foodRoute.post("/upload", upload.single("avatar"), (req, res, next) => {});

module.exports = foodRoute;
