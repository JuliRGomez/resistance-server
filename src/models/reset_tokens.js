'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reset_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this,this.belongsTo(models.users,{
        foreignKey:"user_id"
      });
    }
  };
  reset_tokens.init({
    token: DataTypes.UUID,
    expiration_date:DataTypes.DATE,
    user_id:DataTypes.INTEGER,
    active:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'reset_tokens',
  });
  return reset_tokens;
};