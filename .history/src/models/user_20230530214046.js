//this user map with user tables in DB
const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");
const Op = Sequelize.Op;

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { msg: "Don't valid email" },
      },
    },
    pass_word: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    tableName: "user",
    timestamps: false,
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

module.exports = User;
