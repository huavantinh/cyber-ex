const Like = require("../models/like");

const getLikeList = async (req, res) => {
  let data = await Like.findAll();
  console.log(data);
  // let data2 = await User.findOne()
  res.status(200).send(data);
};

const getLikeUser = async (req, res) => {
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
  let data = await Like.create({
    user_id: 5,
    res_id: 1,
    // date_like: date.Now(),
  });
  res.status(200).send(data);
};

module.exports = { getLikeList, createLike, getLikeUser };
