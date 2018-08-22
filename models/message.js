module.exports = function(sequelize, DataTypes) {
  let Message = sequelize.define("Message", {
    note: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    requestType: DataTypes.STRING
  });
  return Message;
};
