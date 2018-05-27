'use strict';
module.exports = (sequelize, DataTypes) => {
  var Survey = sequelize.define('survey', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    good_with_dogs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shedding: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trainability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};