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
  let data = await User.create({
    user_id: 31,
    full_name: "hvt",
    email: "hvt@gmail.com",
    password: "3110",
  });
  res.status(200).send(data);
};
const updateUser = (req, res) => {
  res.status(200).send("hello updated");
};

module.exports = { getUser, createUser, updateUser, getAllUser };
