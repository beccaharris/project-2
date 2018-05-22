module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temperment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activity_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    barking_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hypoallergenic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    good_for_kids: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    shedding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trainability: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return Dog;
}