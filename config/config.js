require("dotenv").config();

module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
      underscored: true
    }
  },
  production: {
    useEnvVariable: process.env.JAWSDB_URL,
    dialect: "mysql",
    define: {
      underscored: true
    }
  }
};