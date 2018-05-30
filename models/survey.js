'use strict';
module.exports = (sequelize, DataTypes) => {
  var Survey = sequelize.define('Survey', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    barking_level: {
      type: DataTypes.INTEGER,
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
    trainability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shedding: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hypoallergenic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },  
  }, {});
  Survey.associate = function(models) {
    Survey.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Survey;
};