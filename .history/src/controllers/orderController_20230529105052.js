const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  let data = await Order.findAll();
  console.log("test data =>>>> ", data);
  res.send(data);
};

const createOrder = async (req, res) => {
  let data = await Order.create({
    user_id: 1,
    food_id: 10,
    amount: "2",
    code: "",
    arr_sub_id: 3,
  });
  console.log("test data =>>>> ", data);
  res.send(data);
};

const createReview = async (req, res) => {
  let data = await  createReview.create{
    user_id: 2,
  
  }
  console.log("test data =>>>> ", data);
  res.send(data);
}

module.exports = { getAllOrder, createOrder };
