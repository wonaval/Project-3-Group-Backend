'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.item, {through: 'cart'})
    }
  };
  user.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    creditCard : DataTypes.INTEGER,
    address : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};