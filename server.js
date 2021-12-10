
// importing express and using function in express and calling it app
const express = require('express')
const app = express()

// morgan lets us know if requests went through
app.use(require('morgan')('tiny'))

// variable to start rowdy-logger
const routesReport = require('rowdy-logger').begin(app)

// accepts json formatting
app.use(express.json())

// allows us to fetch our api in the frontEnd
app.use(require('cors')())

// importing routes file we created
const itemRoutes = require('./routes/itemRoute')
const userRoutes = require('./routes/userRoute')
const cartRoutes = require('./routes/cartRoute')


// '/item' will be handled at the itemRoutes file
app.use('/item', itemRoutes)
app.use('/user', userRoutes)
app.use('/cart', cartRoutes)



// access our port and starts the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})
