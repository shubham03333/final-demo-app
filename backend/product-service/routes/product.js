const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/', (request, response) => {
  const { title, price, description, categoryId } = request.body

  const query = `
    INSERT INTO Product
      (Title, Price, Description, CategoryId)
    VALUES
      ('${title}', ${price}, '${description}', ${categoryId})
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.get('/', (request, response) => {
  const query = `
    SELECT Id, Title, Price, Description, CategoryId 
    FROM Product
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title, price, description, categoryId } = request.body

  const query = `
    UPDATE Product
    SET
      Title = '${title}', 
      Price = ${price}, 
      Description = '${description}', 
      CategoryId = ${categoryId}
    WHERE
      Id = ${id}
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  const query = `
    DELETE FROM Product
    WHERE
      Id = ${id}
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
