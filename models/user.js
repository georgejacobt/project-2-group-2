module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    cell_phone: DataTypes.STRING,
    email_address: DataTypes.STRING,
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
  }
  return User;
}
