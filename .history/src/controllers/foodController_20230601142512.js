const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const models = initModel(sequelize);
const configstatus = require("../config/response");
userRoute.use(express.json());

//get all food functions
const getAllFood = (req, res) => {
  res.send(data);
};

module.exports = { getAllFood };
