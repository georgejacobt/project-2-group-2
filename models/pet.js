module.exports = function(sequelize, DataTypes) {
  let Pet = sequelize.define("Pet", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    medication: DataTypes.STRING,
    health_issues: DataTypes.TEXT,
    feeding_instructions: DataTypes.TEXT,
    vet_clinic_name: DataTypes.STRING,
    vet_first_name: DataTypes.STRING,
    vet_last_name: DataTypes.STRING,
    clinic_phone: DataTypes.STRING,
    vist_number: DataTypes.INTEGER
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
