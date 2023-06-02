const express = require("express");
const Router = express.Router();
var reviewRouter = require("./controller/reviewcontroller");

reviewRouter.get("/showReview", showReview);
reviewRouter.post("/createReview", createReview);

module.exports = reviewRouter;
