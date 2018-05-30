'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('breeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      personality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activity_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      barking_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hypoallergenic: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      good_with_kids: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      good_with_dogs: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shedding: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trainability: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('breeds');
  }
};