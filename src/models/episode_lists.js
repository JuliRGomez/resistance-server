'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episode_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.contents, {
        foreignKey: "content_id"
      });
    }
  };
  episode_lists.init({
    season_num: DataTypes.INTEGER,
    episode_name: DataTypes.STRING,
    content_id: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    episode_rating: DataTypes.NUMERIC,
    episode_num: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    last_update: DataTypes.DATE,
    episode_imdb_link: DataTypes.STRING,
    episode_score_votes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'episode_lists',
  });
  return episode_lists;
};