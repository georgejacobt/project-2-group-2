module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    cellPhone: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function (models) {
    User.hasMany(models.Pet, {
      onDelete: "cascade"
    });
    User.hasMany(models.Home, {
      onDelete: "cascade"
    });
    User.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };
  return User;
};
