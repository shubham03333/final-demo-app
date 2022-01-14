const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

// add the routers
const routerProduct = require('./routes/product')
app.use('/product', routerProduct)

app.listen(4000, '0.0.0.0', () => {
  console.log('product-server started on port 4000')
})
