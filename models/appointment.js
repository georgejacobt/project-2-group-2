module.exports = function(sequelize, DataTypes) {
  let Appointment = sequelize.define("Appointment", {
    type: DataTypes.BOOLEAN,  //false = pet, true = home
    location: DataTypes.BOOLEAN, //false = home, true = away
    time: DataTypes.BOOLEAN, //false = half day, true = full day
    date: DataTypes.DATE,
    complete: DataTypes.BOOLEAN,
    rate: DataTypes.DECIMAL
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
    Appointment.belongsTo(models.Home, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Appointment;
};
