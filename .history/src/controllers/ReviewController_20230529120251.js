const Review = require("../models/review");
//show review
const showReview = async (req, res) => {
  let data = await Review.findAll();
  res.send(data);
};
//creatte review
const createReview = async (req, res) => {
  let data = await Review.create({
    user_id: 3,
    res_id: 1,
    amount: 5,
    date_rate: "",
  });
  console.log("test data =>>>> ", data);
  res.send(data);
};

module.exports = { createReview, showReview };
