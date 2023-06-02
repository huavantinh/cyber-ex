const express = require("express");
const foodRoute = express.Router();
const multer = require("multer");
const handelFood = require("../controllers/foodController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public/img");
  },
  filename: function (req, file, cb) {
    // const newFileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + newFileName);
    const newFileName = Date.now() + "-" + file.originalname;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

foodRoute.post("/upload", upload.single("data"), (req, res, next) => {
  const file = req.file;
  res.send(file);
});
foodRoute.get("/getFood", handelFood.getAllFood);

module.exports = foodRoute;
