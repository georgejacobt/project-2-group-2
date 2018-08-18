module.exports = function(sequelize, DataTypes) {
  let Message = sequelize.define("Message", {
    note: DataTypes.STRING
  });

  Message.associate = function(models) {
    Message.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
    Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Message;
};
