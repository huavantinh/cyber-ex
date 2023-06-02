const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  let data = await Order.findAll();
  console.log("test data =>>>> ", data);
  res.send(data);
};

const createOrder = async (req, res) => {
  let data = await Order.create({
    user_id: 2,
    	food_id:4,
      	amount: 2,
        	code:,
          	arr_sub_id:3,

  });
};

module.exports = { getAllOrder };
