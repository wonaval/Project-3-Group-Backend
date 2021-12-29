'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cart.init(
    {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      checkoutDate: DataTypes.DATE,
      checkedOut: DataTypes.BOOLEAN,
      creditCard: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'cart',
    }
  );
  return cart;
};
