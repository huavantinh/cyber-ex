const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class Order extends Model {}

Order.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      // allowNull defaults to true
    },
    // amount: {
    //   type: DataTypes.STRING,
    // },
    // code: {
    //   type: DataTypes.STRING,
    // },
    // arr_sub_id: {
    //   type: DataTypes.NUMBER,
    // },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "order", // We need to choose the model name
    tableName: "order",
    timestamps: false,
  }
);

// the defined model is the class itself
// console.log(Order === sequelize.models.Order); // true
module.exports = Order;
