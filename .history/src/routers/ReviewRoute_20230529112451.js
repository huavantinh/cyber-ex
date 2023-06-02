const express = require("express");
const reviewRoute = express.Router();
var reviewController = require("./controller/reviewController");

reviewRoute.get("/showReview", showReview);
reviewRoute.post("/createReview", createReview);

module.exports = reviewRouter;
