module.exports = {
  db_host: "localhost",
  db_port: 3306,
  db_user: "uttam",
  db_password: "stones",
  database: "node_express",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
