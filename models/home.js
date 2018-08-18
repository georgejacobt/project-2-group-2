module.exports = function(sequelize, DataTypes) {
  let Home = sequelize.define("Home", {
    streetAddress1: DataTypes.STRING,
    streetAddress2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: { type: DataTypes.STRING, defaultValue: "Tx" },
    zip: DataTypes.STRING,
    emergContFirstName: DataTypes.STRING,
    emergContLastName: DataTypes.STRING,
    emergContPhone: DataTypes.STRING,
    gateCode: DataTypes.STRING,
    doorCode: DataTypes.STRING,
    alarmCode: DataTypes.STRING,
    keyInstructions: DataTypes.TEXT,
    wifiPassword: DataTypes.STRING
  });

  Home.associate = function(models) {
    Home.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
    Home.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Home;
};
