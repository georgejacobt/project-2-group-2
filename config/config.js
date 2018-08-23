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
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
<<<<<<< HEAD
};
=======
};

const config = module.exports;

config.db = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME
};

config.db.details = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql"
};

config.keys = {
  secret: process.env.SECRET
};
>>>>>>> 38c3877d6c0611b2b1dc2ff429c77a458495695e
