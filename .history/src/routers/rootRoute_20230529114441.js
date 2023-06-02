const express = require("express");
const rootRoute = express.Router();

const userRoute = require("../routers/userRoute");
const likeRoute = require("../routers/likeRoute");
const orderRoute = require("../routers/orderRoute");
const reviewRoute = require("./routers/reviewRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/like", likeRoute);
rootRoute.use("/order", orderRoute);
rootRoute.use("/reveiw", reviewRoute);

// rootRoute.use("/product", userRoute);

module.exports = rootRoute;
