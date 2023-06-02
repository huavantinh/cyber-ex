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
    user_id: 10,
    full_name: "hvt",
    email: "hvt@gmail.com",
    pass_word: "3110",
  });
  res.status(200).send(data);
};

const updateUser = async (req, res) => {
  let { user_id } = req.params;
  let data = await User.update(
    {
      user_id,
      full_name: "hvt2up",
      email: "hvt@gmail.com",
      pass_word: "3110",
    },
    { where: { user_id } }
  );
  res.send(data.user_id);
};

module.exports = { getUser, createUser, updateUser, getAllUser };
