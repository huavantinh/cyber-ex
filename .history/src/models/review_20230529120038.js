const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");

class Review extends Model {}

Review.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    res_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      // allowNull defaults to true
    },
    amount: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    date_rate: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "review", // We need to choose the model name
    tableName: "rate_res",
    timestamps: false,
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
module.exports = Review;
