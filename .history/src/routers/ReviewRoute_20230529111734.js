const reviewRouter = require("router");

reviewRouter.get("/showReview");
reviewRouter.post("/createReview", createReview);

module.exports = reviewRouter;
