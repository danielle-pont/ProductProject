const express = require('express')
const router = express.Router()

const db = require('../db/db')

// route  GET /api/allProducts/:id
// Gets a job by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getProductById(id)
    .then((product) => {
      res.json(product)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  POST /api/allProducts
// POSTs to the database
router.post('/', (req, res) => {
  const product = req.body
  db.addProduct(product)
    .then((id) => {
      const newProductId = id[0]
      return db.getProductById(newProductId)
    })
    .then((product) => {
      res.json(product)
    })
    .catch((e) => {
      console.log(e.message)
      res.status(500).send(e.message)
    })
})

// route  DELETE /api/jobs/:id
// Deletes a job by id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteProduct(id)
    .then(() => {
      res.json(id)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

module.exports = router
