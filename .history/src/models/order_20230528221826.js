const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class Order extends Model {}

Order.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    amount: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    arr_sub_id: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
