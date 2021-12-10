// getting the models folder
const models = require('../models')
const item = require('../models/item')

// creating an empty object to add functions in the object
const itemController = {}


// We're creating functions inside the controller object
// Req are the requests before the api is fetched
// Res is the response we get back after the fetch 


// function gets all item from database
itemController.getAllItems = async (req, res) => {
    try {
        const items = await models.item.findAll()
        res.json({items : items})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}

// function gets on item from database
itemController.getItem = async (req, res) => {
    try {
        const item = await models.item.findOne({where: { id: req.params.id } })
        res.json({item: item})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}



// exports itemController Object so we can import thorough routes
module.exports = itemController