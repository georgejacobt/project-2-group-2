module.exports = function(sequelize, DataTypes) {
  let Pricing = sequelize.define("Appointment", {
    service : DataTypes.STRING,
  });

  Pricing.associate = function(models) {
    Pricing.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
  };  

  return Pricing;
};
