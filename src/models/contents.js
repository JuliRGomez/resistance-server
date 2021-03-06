'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.belongsToMany(models.directors,{
        through: "content_directors",
        foreignKey: "content_id"
      });*/
    }
  };
  contents.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    total_seasons: DataTypes.INTEGER,
    imbd_score: DataTypes.NUMERIC,
    release_date: DataTypes.STRING,
    play_time: DataTypes.STRING,
    content_rating: DataTypes.INTEGER,
    total_episodes: DataTypes.INTEGER,
    content_type: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    last_update: DataTypes.DATE,
    imdb_core_votes: DataTypes.INTEGER,
    rating_details: DataTypes.JSON,
    lenguages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};