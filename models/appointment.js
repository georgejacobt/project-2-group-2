module.exports = function(sequelize, DataTypes) {
  let Appointment = sequelize.define("Appointment", {
    day_begin : DataTypes.STRING,
    day_end : DataTypes.STRING,
  });

  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };  

  return Appointment;
};
