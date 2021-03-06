'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.belongsTo(models.contents, {
        foreignKey: "content_id"
      });

      this.belongsTo(models.genres, {
        foreignKey: "genre_id"
      });*/
    }
  };
  content_genres.init({
    genre_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_genres',
  });
  return content_genres;
};