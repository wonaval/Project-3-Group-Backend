// getting the models folder
const models = require('../models')

// creating an empty object to add functions in the object
const cartController = {}




cartController.userAddItem = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}



module.exports = cartController