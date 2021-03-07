'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_types extends Model {
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
      
      this.belongsTo(models.content_ratings, {
        foreignKey: "content_rating_id"
      });
    }
  };
  content_types.init({
    name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_types',
  });
  return content_types;
};