const express = require('express')
const app = express()

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())

const itemRoutes = require('./routes/itemRoute')
const userRoutes = require('./routes/userRoute')

app.use('/item', itemRoutes)
app.use('/user', userRoutes)




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})
