'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.item.belongsToMany(models.user, {through: 'cart'})
    }
  };
  item.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    category: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};