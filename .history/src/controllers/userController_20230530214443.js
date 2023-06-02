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
  res.status(200).send(data);
};

//update user done
const updateUser = async (req, res) => {
  let { user_id } = req.params;
  let data = await User.update(
    {
      user_id,
      full_name: "hvt3up",
      email: "hvt@gmail.com",
      pass_word: "3110",
    },
    { where: { user_id } }
  );
  console.log(data);
  res.send(data);
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
  res.send(data);
};

// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// let data: Array<any> = await MyDataSequelizeAccess.findAll({
//   where: {
//     name: {
//       [Op.like]: '%Bob%'
//     }
//   }
// });

model.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
};
