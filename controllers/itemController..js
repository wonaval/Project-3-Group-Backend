// getting the models folder
const models = require('../models')
const item = require('../models/item')

// creating an empty object to add functions in the object
const itemController = {}


itemController.getAllItems = async (req, res) => {
    try {
        const items = await models.item.findAll()
        res.json({items : items})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}

itemController.getItem = async (req, res) => {
    try {
        const item = await models.item.findOne({where: { id: req.params.id } })
        res.json({item: item})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}

itemController.getAllItems = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}

itemController.getAllItems = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}

itemController.getAllItems = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}



module.exports = itemController