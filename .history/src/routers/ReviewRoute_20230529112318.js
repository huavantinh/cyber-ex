const express = require("express");
const reviewRouter = express.Router();
var automatedRoutes = require("./testRoutes/automated");

reviewRouter.get("/showReview", showReview);
reviewRouter.post("/createReview", createReview);

module.exports = reviewRouter;
