'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('episode_lists', {
      episode_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      season_num: {
        type: Sequelize.INTEGER
      },
      episode_name: {
        type: Sequelize.STRING
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contents',
          key: 'content_id'
        }
      },
      release_date: {
        type: Sequelize.STRING
      },
      episode_rating: {
        type: Sequelize.NUMERIC
      },
      episode_num: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      last_update: {
        type: Sequelize.DATE
      },
      episode_imdb_link: {
        type: Sequelize.STRING
      },
      episode_score_votes: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('episode_lists');
  }
};