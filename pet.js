module.exports = function(sequelize, DataTypes) {
  let Pet = sequelize.define("Pet", {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    feeding_instructions: DataTypes.TEXT,
    vet_clinic_name: DataTypes.STRING,
    vet_first_name: DataTypes.STRING,
    vet_last_name: DataTypes.STRING,
    clinic_phone: DataTypes.STRING,
  });

  Pet.associate = function(models) {
    Pet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pet;
};
