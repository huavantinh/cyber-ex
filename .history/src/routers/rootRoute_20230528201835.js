const express = require("express");
const rootRoute = express.Router();

const userRoute = require("../routers/userRoute");
const likeRoute = require("../routers/likeRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/like", likeRoute);

rootRoute.use("/product", userRoute);

module.exports = rootRoute;
