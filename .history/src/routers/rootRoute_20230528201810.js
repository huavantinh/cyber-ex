const express = require("express");
const rootRoute = express.Router();

const userRoute = require("../routers/userRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/like", userRoute);

rootRoute.use("/product", userRoute);

module.exports = rootRoute;
