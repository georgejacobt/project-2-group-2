module.exports = function(sequelize, DataTypes) {
  let Admin = sequelize.define("Admin", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  });
  return Admin;
};
