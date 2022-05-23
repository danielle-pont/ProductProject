const db = require('./db')
const reviewsDb = require('./reviews')

module.exports = {
  ...db,
  ...reviewsDb,
}
