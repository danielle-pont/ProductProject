import { combineReducers } from 'redux'

import productsReducer from './myProductsReducer'
import myProductsReducer from './allProductsReducer'

export default combineReducers({
  products: productsReducer,
  myProducts: myProductsReducer,
})
