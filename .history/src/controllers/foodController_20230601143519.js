const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

const configstatus = require("../config/response");
// foodRoute.use(express.json());

//get all food functions
const getAllFood = (req, res) => {
  let data = model.food.findALL();
  res.send("winning");
};

module.exports = { getAllFood };
