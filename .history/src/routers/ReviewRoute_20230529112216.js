const express = require('express'),
const  router = express.Router();

reviewRouter.get("/showReview", showReview);
reviewRouter.post("/createReview", createReview);

module.exports = reviewRouter;
