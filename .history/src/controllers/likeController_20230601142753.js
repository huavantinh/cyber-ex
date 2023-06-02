const initmodel = require("../models/initmodel");
const sequelize = require("../models/index");
const model = initmodel(sequelize);
likeRoute.use(express.json());

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
const getLikeRes = async (req, res) => {
  const { id } = req.params;
  let data = await Like.findAll({
    where: {
      res_id: id,
    },
  });
  res.send(data);
};
const createLike = async (req, res) => {
  const today = new Date();
  let data = await Like.create({
    user_id: 5,
    res_id: 3,
    date_like: today,
  });
  res.status(200).send(data);
};

module.exports = { getLikeList, createLike, getLikeUser, getLikeRes };
