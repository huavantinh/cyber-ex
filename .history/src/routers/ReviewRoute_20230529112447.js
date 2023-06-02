const express = require("express");
const reviewRoute = express.Router();
var reviewController = require("./controller/reviewcontroller");

reviewRoute.get("/showReview", showReview);
reviewRoute.post("/createReview", createReview);

module.exports = reviewRouter;
