// this variable extends from server.js
const cartRoutes = require('express').Router()

// imports cartController file we created
const cartController = require('../controllers/cartController')

cartRoutes.post('/', cartController.userAddItem)
cartRoutes.get('/', cartController.getCart)
cartRoutes.delete('/:id', cartController.deleteItemFromCart)

module.exports = cartRoutes