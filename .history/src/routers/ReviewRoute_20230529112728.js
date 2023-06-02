const express = require("express");
const reviewRoute = express.Router();
var reviewController = require("../controllers/reviewController");

reviewRoute.get("/showReview", reviewController.showReview);
reviewRoute.post("/createReview", reviewController.createReview);

module.exports = reviewRouter;
