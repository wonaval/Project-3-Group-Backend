// this variable extends from server.js
const itemRoutes = require('express').Router()

// imports itemController file we created
const itemController = require('../controllers/itemController')


itemRoutes.get('/', itemController.getAllItems)
itemRoutes.get('/:id', itemController.getItem)


module.exports = itemRoutes