const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/', (request, response) => {
  const { title, description } = request.body

  const query = `
    INSERT INTO Category
      (Title, Description)
    VALUES
      ('${title}','${description}')
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.get('/', (request, response) => {
  const query = `
    SELECT Id, Title,Description
    FROM Category
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title, description } = request.body

  const query = `
    UPDATE Category
    SET
      Title = '${title}', 
      Description = '${description}'
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
    DELETE FROM Category
    WHERE
      Id = ${id}
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
