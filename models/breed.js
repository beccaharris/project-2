'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breed = sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    personality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activity_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    barking_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hypoallergenic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    good_with_kids: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    good_with_dogs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shedding: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trainability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Breed.associate = function(models) {
    // associations can be defined here
  };
  return Breed;
};