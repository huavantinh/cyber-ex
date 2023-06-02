// const express = require("express");
// const app = express();
// const port = 8080;
// const mysql2 = require("mysql2");
// var cors = require("cors");
// app.use(cors());
// // const axios = require("axios");
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const rootRoute = require("./routers/rootRoute");
// app.use("/api", rootRoute);

//file system
const fs = require("fs");

console.log(__dirname);
console.log(process.cwd());

//create file system
fs.writeFile(process.cwd() + "/text.txt", "Hello content!", (err) => {
  if (err) throw err;
  console.log("ok .>>>>Saved!");
});

//read file
fs.readFile(process.cwd() + "/text.txt", "utf8", (err, data) => {
  console.log(data);
});

//delete file
