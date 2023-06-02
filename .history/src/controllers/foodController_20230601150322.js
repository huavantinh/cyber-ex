const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

const configstatus = require("../config/response");
// foodRoute.use(express.json());

//get all food functions
const getAllFood = async (req, res) => {
  let data = await model.food.findALL();

  //   res.send("winning");
  res.status(200).send(data);
  configstatus.successCode(res, data);
};

module.exports = { getAllFood };
