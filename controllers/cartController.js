// getting the models folder
const models = require('../models');

// creating an empty object to add functions in the object
const cartController = {};

// We're creating functions inside the controller object
// Req are the requests before the api is fetched
// Res is the response we get back after the fetch

// Function adds an Item to a user's cart
cartController.userAddItem = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: { id: req.headers.authorization },
    });
    const item = await models.item.findOne({ where: { id: req.body.id } });

    const addItem = await models.cart.create({
      userId: user.id,
      itemId: item.id,
      checkedOut: false,
      checkoutDate: null,
    });
    res.json({ item: addItem });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// Function that gets all user's cart item
cartController.getCart = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: { id: req.headers.authorization },
    });

    // finds all cart models where userId is the same as user.id
    const carts = await models.cart.findAll({ where: { userId: user.id } });

    res.json({ items: carts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// Function that deletes 1 item from user's cart
cartController.deleteItemFromCart = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: { id: req.headers.authorization },
    });
    const cartItem = await models.cart.findOne({
      where: {
        id: req.params.id,
        userId: user.id,
        checkedOut: false,
      },
    });

    if (user.id === cartItem.userId) {
      // res.json({item : cartItem})
      const removeCartItem = await cartItem.destroy();
      res.json({ message: 'cart item deleted successfully' });
    }

    // if( user.id === cartItem.userId){
    //     const removeCartItem = await cartItem.destroy()
    //     res.json({ message: 'cart item deleted successfully', removeCartItem })
    // }
    else {
      res.status(401).json({ error: 'not your fav' });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// function that updates the checkout date forEach item
cartController.updateCheckOutDate = async (req, res) => {
  try {
    const user = await models.user.findOne({ where: { id: req.body.id } });
    // gets all carts associated with user since we're getting it from user.id
    const carts = await models.cart.findAll({
      where: {
        userId: user.id,
        checkoutDate: null,
      },
    });
    const orderDate = new Date();
    // Loops through each cart from user and inside, updates the date
    carts.forEach(async (element) => {
      await element.update({
        checkoutDate: orderDate,
        checkedOut: true,
        address: req.body.address,
        creditCard: req.body.credit,
      });
    });

    res.json({ message: 'Cart item updated successfully', carts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = cartController;
