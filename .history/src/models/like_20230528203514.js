const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class Like extends Model {}

Like.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    res_id: {
      type: DataTypes.NUMBER,
      // allowNull defaults to true
    },
    date_like: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "like_res", // We need to choose the model name
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

module.exports = Like;
