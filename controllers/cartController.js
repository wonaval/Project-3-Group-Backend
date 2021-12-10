// getting the models folder
const models = require('../models')

// creating an empty object to add functions in the object
const cartController = {}




cartController.userAddItem = async (req, res) => {
    try {

        const user = await models.user.findOne({ where: { id: req.headers.authorization } })
        const item = await models.item.findOne({ where: { id: req.body.id } })


        const addItem = await models.cart.create({
            userId: user.id,
            itemId: item.id,
        })
        res.json({item: addItem})

        
    } catch (error) {
        console.log(error)
        res.status(404).json({error : error.message})
    }
}


cartController.getCart = async (req, res) => {
    try {
        
        const user = await models.user.findOne({ where: { id: req.headers.authorization } })
        const cart = await models.cart.findAll({ where: { userId: user.id}})

        res.json({item: cart})


    }
    catch(error){
        console.log(error)
        res.status(404).json({error : error.message})
    }
}


cartController.deleteItemFromCart = async (req, res) => {
    try {
        
        const user = await models.user.findOne({ where: { id: req.headers.authorization } })
        const cartItem = await models.cart.findOne({ where: { itemId: req.params.id}})

        if( user.id === cartItem.userId){
            const removeCartItem = await cartItem.destroy()
            res.json({ message: 'cart item deleted successfully', removeCartItem })
        }
        else { res.status(401).json({ error: 'not your fav' }) }


    }
    catch(error){
        console.log(error)
        res.status(404).json({error : error.message})
    }
}


cartController.updateCheckOutDate = async (req, res) => {
    try {
        
        const user = await models.user.findOne({ where: { id: req.headers.authorization } })
        const carts = await models.cart.findAll({ where: { userId: user.id}})

        carts.forEach(async(element) => {
            await element.update({checkoutDate : new Date()})
        });

        // const cartDate = await carts.update()
        res.json({ message: 'cart item updated successfully', carts})


    }
    catch(error){
        console.log(error)
        res.status(404).json({error : error.message})
    }
}




module.exports = cartController