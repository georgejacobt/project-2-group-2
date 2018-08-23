const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  let Admin = sequelize.define(
    "Admin",
    {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      instanceMethods: {
        comparePasswords: comparePasswords
      },
      hooks: {
        beforeValidate: hashPassword
      }
    }
  );

  Admin.associate = function(models) {
    Admin.hasMany(models.Appointment, {
      onDelete: "cascade"
    });
    Admin.hasMany(models.Pet, {
      onDelete: "cascade"
    });
    Admin.hasMany(models.Home, {
      onDelete: "cascade"
    });
  };

  return Admin;
};

// Compares two passwords.
// TODO: Password comparison logic.
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

// Hashes the password for a user object.

function hashPassword(user) {
  if (user.changed("password")) {
    return bcrypt.hash(user.password, 10).then(function(password) {
      user.password = password;
    });
  }
}
