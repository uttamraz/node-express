const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const Tutorials = require("./tutorial.model");
const Users = require("./user.model");

const dbSequelize = new Sequelize(dbConfig.database, dbConfig.db_user, dbConfig.db_password, {
  host: dbConfig.db_host,
  port: dbConfig.db_port,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.dbSequelize = dbSequelize;

db.Tutorials = Tutorials(dbSequelize, Sequelize);
db.Users = Users(dbSequelize, Sequelize);

module.exports = db;
