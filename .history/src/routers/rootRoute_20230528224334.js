const express = require("express");
const rootRoute = express.Router();

const userRoute = require("../routers/userRoute");
const likeRoute = require("../routers/likeRoute");
const orderRoute = require("../routers/orderRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/like", likeRoute);
rootRoute.use("/order", orderRoute);

// rootRoute.use("/product", userRoute);

module.exports = rootRoute;
