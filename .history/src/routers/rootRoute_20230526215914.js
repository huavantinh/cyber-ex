const express = require('express');
const rootRoute = express.Router();

const userRoute = require('../routers/userRoute');

rootRoute.use("/user", userRoute)

module.exports = rootRoute;