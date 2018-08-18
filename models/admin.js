module.exports = function(sequelize, DataTypes) {
  let Admin = sequelize.define("Admin", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Admin.associate = function (models) {
    Admin.hasMany(models.Appointment, {
      onDelete: "cascade"
    });
    Admin.hasMany(models.Pet, {
      onDelete: "cascade"
    });
    Admin.hasMany(models.Home, {
      onDelete: "cascade"
    });
    Admin.hasMany(models.Message, {
      onDelete: "cascade"
    });
  }

  return Admin;
};
