//connect db
//host, db, username, password,port 
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_food', 'root', '31101997', {
    host: 'localhost',
    port: 3309,
    dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  module.exports = sequelize