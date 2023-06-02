const express = require("express");
const app = express();
const port = 8080;
const mysql2 = require("mysql2");
var cors = require("cors");
app.use(cors());
// const axios = require("axios");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const rootRoute = require("./routers/rootRoute");
app.use("/api", rootRoute);

//file system
