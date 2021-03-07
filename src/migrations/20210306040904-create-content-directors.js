'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_directors', {
      director_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'directors',
          key:'director_id',
        },
      },
      content_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'contents',
          key:'content_id',
        },
      },
      last_update: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('content_directors');
  }
};