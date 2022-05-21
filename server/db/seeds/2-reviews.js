/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').insert([
    {
      productId: 1,
      authorId: 'auth0|something',
      comment: 'I like this one.',
    },
    {
      productId: 1,
      authorId: 'auth0|something',
      comment: 'I do not like this one.',
    },
    {
      productId: 2,
      authorId: 'auth0|something',
      comment: 'Just use water instead.',
    },
  ])
}
