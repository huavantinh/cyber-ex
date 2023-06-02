const User = require("../models/user");

const getAllUser = async (req, res) => {
  let data = await User.findAll();
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
};

const getUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findAll({
    where: {
      user_id: id,
    },
  });
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
};

const createUser = async (req, res) => {
  let data = await User.create({});
  res.status(200).send("hello created");
};
const updateUser = (req, res) => {
  res.status(200).send("hello updated");
};

module.exports = { getUser, createUser, updateUser, getAllUser };
