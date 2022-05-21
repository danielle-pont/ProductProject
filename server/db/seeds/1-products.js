/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  return await knex('products').insert([
    {
      id: 1,
      userId: 'auth0|something',
      name: 'Lash Sensational Black Pearl Washable Mascara',
      brand: 'Maybelline',
      description:
        'Full black pearl intensity meets the full-fan effect! Our unique Fanning Brush reveals layers of lashes for a sensational finish.',
      priceRange: '$20-$30',
      imageUrl:
        '["https://image.influenster.com/eyJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS9NYXliZWxsaW5lLU1hc2NhcmEtTGFzaC1TZW5zYXRpb25hbC1XU0gtTWFzY2FyYS0yNTMtQkxBQ0tFU1QtQkxBQ0stLXByaW1hcnkuanBnIiwgImVkaXRzIjogeyJyb3RhdGUiOiBudWxsLCAicmVzaXplIjogeyJ3aWR0aCI6IDc1MCwgImhlaWdodCI6IDc1MCwgImZpdCI6ICJpbnNpZGUiLCAiYmFja2dyb3VuZCI6IHsiciI6IDEsICJnIjogMSwgImIiOiAxLCAiYWxwaGEiOiAwfSwgIndpdGhvdXRFbmxhcmdlbWVudCI6IHRydWV9fSwgImV4dGVuZCI6IHt9fQ=="]',
      type: 'cosmetics',
      likes: 2,
    },
    {
      id: 2,
      userId: 'auth0|something',
      name: 'The Water Cream',
      brand: 'Tatcha',
      description:
        'This oil-free, anti-aging water cream releases a burst of skin-improving Japanese nutrients, powerful botanicals and optimal hydration for pure, poreless skin.',
      priceRange: '$120-$130',
      imageUrl:
        '["https://cdn.shopify.com/s/files/1/0575/3490/6568/products/26386482401_800x.jpg?v=1629571523"]',
      type: 'skincare',
      likes: 1,
    },
  ])
}
