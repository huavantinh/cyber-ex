const express = require("express");
const foodRoute = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public/img");
  },
  filename: function (req, file, cb) {
    const newFileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + newFileName);
  },
});

const upload = multer({ dest: process.cwd() + "/public/img" });

const handelFood = require("../controllers/foodController");
foodRoute.get("/getFood", handelFood.getAllFood);
foodRoute.post("/upload", upload.single("avatar"), (req, res, next) => {});

module.exports = foodRoute;
