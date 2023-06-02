const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  let data = await Order.findAll();
  res.send(data);
};
module.exports = { getAllOrder };
