module.exports = function(sequelize, DataTypes) {
  let Home = sequelize.define("Home", {    
    street_address1: DataTypes.STRING,
    street_address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: {type: DataTypes.STRING, defaultValue: "Tx"},
    zip: DataTypes.STRING,
    emerg_cont_first_name: DataTypes.STRING,
    emerg_cont_last_name: DataTypes.STRING,
    emerg_cont_phone: DataTypes.STRING,
    gate_code: DataTypes.STRING,
    door_code: DataTypes.STRING,
    alarm_code: DataTypes.STRING,
    key_instructions: DataTypes.TEXT,
    wifi_password: DataTypes.STRING
  });

  Home.associate = function(models) {
    Home.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Home;
};
