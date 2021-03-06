'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_actors', {
      actor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model:'actors',
          key:'actor_id',
        },
      },
      content_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
    await queryInterface.dropTable('content_actors');
  }
};