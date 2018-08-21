module.exports = function(sequelize, DataTypes) {
  let Pet = sequelize.define("Pet", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    medication: DataTypes.STRING,
    healthIssues: DataTypes.TEXT,
    feedingInstructions: DataTypes.TEXT,
    vetClinicName: DataTypes.STRING,
    vetFirstName: DataTypes.STRING,
    vetLastName: DataTypes.STRING,
    clinicPhone: DataTypes.STRING,
    visitNumber: DataTypes.INTEGER
  });

  Pet.associate = function(models) {
    Pet.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
    Pet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Pet;
};
