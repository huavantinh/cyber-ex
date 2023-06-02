const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  let data = await Order.findAll();
  console.log(data);
  res.send(data);
};
module.exports = { getAllOrder };
