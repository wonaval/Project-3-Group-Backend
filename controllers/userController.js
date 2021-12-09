// getting the models folder
const models = require('../models')

// creating an empty object to add functions in the object
const userController = {}

// creates a function inside the controller object
// function creates a user
userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            // creates where name from user is the same as request body
            name: req.body.name,
            password: req.body.password
        })

        res.json({ message: 'success', user })
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


userController.login = async (req, res) => {
    try{
        const user = await models.user.findOne({where: { name: req.body.name }})

        if ( user && user.password === req.body.password){
            res.json({message: 'success', user: user})
        }
        else{
            res.status(401).json({ message: 'login failed'})
        }

    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}


userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({ where: { id: req.headers.authorization }})
        
        if (user) { res.json({ user: user }) }
        else { res.status(404).json({ message: 'user not found' }) }


    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}


// userController.login = async (req, res) => {
//     try{
        
//     }
//     catch(error){
//         console.log(error)
//         res.status(400).json(error)
//     }
// }


module.exports = userController