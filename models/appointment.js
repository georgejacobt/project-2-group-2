module.exports = function(sequelize, DataTypes) {
  let Appointment = sequelize.define("Appointment", {
    day_begin : DataTypes.STRING,
    day_end : DataTypes.STRING,
  });

  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.Pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };  

  return Appointment;
};
