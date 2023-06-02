//connect db
//host, db, username, password,port 
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_food', 'root', 'Tinhlagi3103@', {
    host: 'localhost',
    port: 3307,
    dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  module.exports = sequelize