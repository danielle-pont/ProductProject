const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProductById,
  addProduct,
  deleteProduct,
  getProductsByUserId,
  updateProductById,
}

function getProductById(id, db = connection) {
  return db('products').select().where('id', id).first()
}

function addProduct(job, db = connection) {
  return db('products').insert(job, ['id'])
}

function deleteProduct(id, db = connection) {
  return db('products').del().where('id', id)
}

function getProductsByUserId(userId, db = connection) {
  return db('products').select().where('userId', userId)
}

// edit the information on a posted product
function updateProductById(product, id, db = connection) {
  return db('products').select().where('id', id).update(product)
}
