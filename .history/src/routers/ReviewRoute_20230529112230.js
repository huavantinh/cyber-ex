const express = require("express");
const reviewRouter = express.Router();

reviewRouter.get("/showReview", showReview);
reviewRouter.post("/createReview", createReview);

module.exports = reviewRouter;
