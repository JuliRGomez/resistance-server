'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.content_types,{
        foreignKey: "content_type_id"
      });

      this.belongsTo(models.contents, {
        foreignKey: "content_id"
      });
    }
  };
  content_ratings.init({
    content_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_ratings',
  });
  return content_ratings;
};