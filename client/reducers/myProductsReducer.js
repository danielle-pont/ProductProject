import { REQUEST_USER_PRODUCTS } from '../actions'

const initialProductState = {
  myProducts: [],
}

function myProductsReducer(state = initialProductState, action) {
  console.log(action)
  switch (action.type) {
    case REQUEST_USER_PRODUCTS:
      return { ...state, myProducts: action.payload }
    default:
      return state
  }
}

export default myProductsReducer
