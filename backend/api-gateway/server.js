const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

// add the routers
const routerCategory = require('./routes/category')
const routerProduct = require('./routes/product')

app.use('/category', routerCategory)
app.use('/product', routerProduct)

app.listen(3000, '0.0.0.0', () => {
  console.log('backend server started on port 3000')
})
