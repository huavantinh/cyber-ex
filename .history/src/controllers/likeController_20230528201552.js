const Like = require("../models/like");

const getLikeList = async (req, res) => {
  let data = await User.findAll();
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
};

const getUser = async (req, res) => {
  let { id } = req.params;
  let data = await Like.findAll({
    where: {
      user_id: id,
    },
  });
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
};

const createLike = async (req, res) => {
  let data = await User.create({
    user_id: 2,
    res_id: 1,
    date_like: date.Now(),
  });
  res.status(200).send(data);
};
const updateUser = (req, res) => {
  res.status(200).send("hello updated");
};

module.exports = { getLikeList, createLike, DisLike };
