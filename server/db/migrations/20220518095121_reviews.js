/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('productId') // one product, many comments for one product
    table.string('authorId')
    table.text('comment')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
