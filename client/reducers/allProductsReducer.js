import { SET_PRODUCTS, GET_PRODUCT_DETAILS, PRODUCT_LOADING } from '../actions'

const initialProductState = {
  products: [],
  product: {
    id: 2778,
    userId: 'auth0|something',
    name: 'nail oil',
    brand: 'Essie',
    description: 'apricot oil for nails',
    priceRange: '$20-$30',
    imageUrl:
      '["https://image.influenster.com/eyJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS9NYXliZWxsaW5lLU1hc2NhcmEtTGFzaC1TZW5zYXRpb25hbC1XU0gtTWFzY2FyYS0yNTMtQkxBQ0tFU1QtQkxBQ0stLXByaW1hcnkuanBnIiwgImVkaXRzIjogeyJyb3RhdGUiOiBudWxsLCAicmVzaXplIjogeyJ3aWR0aCI6IDc1MCwgImhlaWdodCI6IDc1MCwgImZpdCI6ICJpbnNpZGUiLCAiYmFja2dyb3VuZCI6IHsiciI6IDEsICJnIjogMSwgImIiOiAxLCAiYWxwaGEiOiAwfSwgIndpdGhvdXRFbmxhcmdlbWVudCI6IHRydWV9fSwgImV4dGVuZCI6IHt9fQ=="]',
    type: 'cosmetics',
    likes: 0,
  },
  loading: false,
}

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products }
    case GET_PRODUCT_DETAILS:
      return { ...state, product: action.payload, loading: false }
    case PRODUCT_LOADING:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default productsReducer
