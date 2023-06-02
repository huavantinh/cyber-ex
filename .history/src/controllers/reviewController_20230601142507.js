const { DATE } = require("sequelize");
userRoute.use(express.json());

// const Review = require("../models/rate_res");
const initmodel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initmodel(sequelize);
//show review
const showReview = async (req, res) => {
  let data = await model.rate_res.findAll();
  res.send(data);
};

//show review with restaurant
const reviewByRestaurant = async (req, res) => {
  let { id } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      res_id: id,
    },
  });
  res.send(data);
};

//show review by id user
const reviewByUser = async (req, res) => {
  let { id } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      user_id: id,
    },
  });
  res.send(data);
};

//creatte review
const createReview = async (req, res) => {
  let datenow = new Date();
  let data = await model.rate_res.create({
    user_id: 4,
    res_id: 1,
    amount: 5,
    date_rate: datenow,
  });
  console.log("test data =>>>> ", data);
  res.send(data);
};

module.exports = { createReview, showReview, reviewByRestaurant, reviewByUser };
