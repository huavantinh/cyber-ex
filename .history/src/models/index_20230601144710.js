//connect db
//host, db, username, password,port
const { Sequelize } = require("sequelize");
const config = require("../config/index");
// console.log("ashdfasgdfa>>>>", config);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  }
);

module.exports = sequelize;
