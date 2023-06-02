const express = require("express");
const app = express();
const port = 8080;
const mysql2 = require("mysql2");
var cors = require("cors");
app.use(cors());
const axios = require("axios");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const rootRoute = require("./routers/rootRoute");
app.use("/api", rootRoute);

// const conn = mysql2.createConnection({
//     host: 'localhost',
//     database: 'db_nodecyber',
//     user: 'root',
//     password: "31101997",
//     port: 3307,
// })
// const {getUser} =require('userController')

// // let data = [
// //     {"id": "1", "name": "vt1", "description": "vtthoi1"},
// //     {"id": "2", "name": "vt3", "description": "vtthoi1"},
// //     {"id": "3", "name": "vt4", "description": "vtthoi1"},
// //     {"id": "4", "name": "vt5", "description": "vtthoi4"},
// // ]

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/getdata/:id', (req, res) => {
//   const id  = req.params.id
//  var item = data.find(item => item.id === id);
//  res.status(200).send(item)
// })

// //select form
// app.get('/getfood', (req, res) => {
//     conn.query("SELECT * FROM food " , function (err, result, fields) {
//       if (err) throw err;
//       res.send(result);
//     });

// })

// app.get('/getfood/:id', (req, res) => {
//         conn.query("SELECT * FROM food WHERE food_id = " + req.params.id, function (err, result, fields) {
//           if (err) throw err;
//           res.send(result);
//         });

// })
