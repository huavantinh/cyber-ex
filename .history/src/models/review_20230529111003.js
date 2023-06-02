const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");

class Review extends Model {}

Review.init(
  {
    // Model attributes are defined here
    user_id: {
      type: Review.STRING,
      allowNull: false,
    },
    res_id: {
      type: Review.STRING,
      // allowNull defaults to true
    },
    amount: {
      type: Review.STRING,
      // allowNull defaults to true
    },
    date_rate: {
      type: Review.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "review", // We need to choose the model name
    tableName: "review",
    timestamps: false,
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
module.exports = Review;
