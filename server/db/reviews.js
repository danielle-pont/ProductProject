const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function makeReview(review, db = connection) {
  return db('reviews').insert({
    productId: review.productId,
    authorId: review.authorId,
    comment: review.comment,
  })
}

module.exports = {
  makeReview,
}
