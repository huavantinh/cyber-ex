const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  let data = await Order.findAll();
  console.log("test data =>>>> ", data);
  res.send(data);
};
module.exports = { getAllOrder };
