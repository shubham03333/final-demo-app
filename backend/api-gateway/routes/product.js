const express = require('express')
const axios = require('axios').default

const productService = 'http://localhost:4000'

const router = express.Router()

router.post('/', (request, response) => {
  // get the request from caller and forward it to the category server
  axios
    .post(productService + '/product', request.body)
    .then((axiosResponse) => {
      response.send(axiosResponse.data)
    })
})

router.get('/', (request, response) => {
  // get the request from caller and forward it to the category server
  axios.get(productService + '/product').then((axiosResponse) => {
    response.send(axiosResponse.data)
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params

  // get the request from caller and forward it to the category server
  axios
    .put(productService + '/product/' + id, request.body)
    .then((axiosResponse) => {
      response.send(axiosResponse.data)
    })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  // get the request from caller and forward it to the category server
  axios.delete(productService + '/product/' + id).then((axiosResponse) => {
    response.send(axiosResponse.data)
  })
})

module.exports = router
