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
    modelName: "Order", // We need to choose the model name
    timestamps: false, //
  }
);

// the defined model is the class itself
// console.log(Order === sequelize.models.Order); // true
