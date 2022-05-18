exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('userId').notNullable()
    table.string('name').notNullable()
    table.string('brand')
    table.string('description')
    table.string('priceRange')
    table
      .string('imageUrl')
      .defaultTo(
        'https://i.pinimg.com/564x/31/1f/f5/311ff5f15234d43020b8e97ec6938f7b.jpg'
      )
    table.enu('type', ['hair', 'cosmetics', 'skincare'])
    table.integer('likes').defaultTo(0)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
