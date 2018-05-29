'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },

  }, {});
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  User.associate = function(models) {
    User.hasOne(models.survey, {
      onDelete: "cascade"
    })
  };
  return User;
};