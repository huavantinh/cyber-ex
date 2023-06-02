const express = require("express");
const reviewRoute = express.Router();
const reviewController = require("./controllers/reviewController");

reviewRoute.get("/showReview", reviewController.showReview);
reviewRoute.post("/createReview", reviewController.createReview);

module.exports = reviewRoute;
