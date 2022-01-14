const express = require('express')
const axios = require('axios').default

const categoryServer = 'http://localhost:4001'

const router = express.Router()

router.post('/', (request, response) => {
  // get the request from caller and forward it to the category server
  axios
    .post(categoryServer + '/category', request.body)
    .then((axiosResponse) => {
      response.send(axiosResponse.data)
    })
})

router.get('/', (request, response) => {
  // get the request from caller and forward it to the category server
  axios.get(categoryServer + '/category').then((axiosResponse) => {
    response.send(axiosResponse.data)
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params

  // get the request from caller and forward it to the category server
  axios
    .put(categoryServer + '/category/' + id, request.body)
    .then((axiosResponse) => {
      response.send(axiosResponse.data)
    })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  // get the request from caller and forward it to the category server
  axios.delete(categoryServer + '/category/' + id).then((axiosResponse) => {
    response.send(axiosResponse.data)
  })
})

module.exports = router
