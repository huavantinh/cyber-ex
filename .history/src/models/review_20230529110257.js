const { Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = require("./index.js");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
