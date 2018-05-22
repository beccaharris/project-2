module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
}