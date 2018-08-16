module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    cell_phone: DataTypes.STRING,
    email_address: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    emerg_cont_first_name: DataTypes.STRING,
    emerg_cont_last_name: DataTypes.STRING,
    emerg_cont_phone: DataTypes.STRING,
    gate_code: DataTypes.STRING,
    door_code: DataTypes.STRING,
    alarm_code: DataTypes.STRING,
    key_instructions: DataTypes.TEXT,
    wifi_password: DataTypes.STRING
  });
  return User;
};
