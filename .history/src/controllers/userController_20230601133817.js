const User = require("../models");
const configstatus = require("../config/response");
const getAllUser = async (req, res) => {
  let data = await User.findAll();
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
  configstatus.successCode(res, data);
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
  configstatus.successCode();
};

//??????????????????????????????????/
//Bai 5. check create vì sao ko xác dindhj được req.body
const createUser = async (req, res) => {
  let { full_name, email, pass_word } = req.body;
  let modelUser = {
    full_name,
    email,
    pass_word,
  };
  let data = await User.create(modelUser);
  console.log(data);
  configstatus.successCode();
};

//update user done
const updateUser = async (req, res) => {
  let { user_id } = req.params;
  let data = await User.update(
    {
      user_id,
      full_name: "hvt3up",
      email: "hvtup@gmail.com",
      pass_word: "3110",
    },
    { where: { user_id } }
  );
  configstatus.successCode();
};

//delete user
const deleteUser = async (req, res) => {
  let { user_id } = req.params;
  let data = await User.destroy({
    where: {
      user_id,
    },
  });
  console.log(data);
  configstatus.successCode(
    res,
    user_id,
    "You have just deleted the user with "
  );
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
};