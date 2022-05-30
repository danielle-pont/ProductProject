import {
  getAllProducts,
  getProductById,
  getUserProducts,
  postProduct,
} from '../apis'
// import * as api from '../apis'

export const REQUEST_USER_PRODUCTS = 'REQUEST_USER_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS'
export const PRODUCT_LOADING = 'PRODUCT_LOADING'

// Simple actions

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products: products,
  }
}
export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export function setLoading() {
  return {
    type: PRODUCT_LOADING,
  }
}

export function getProductDetails(product) {
  return {
    type: GET_PRODUCT_DETAILS,
    payload: product,
  }
}

export function requestUserProducts(products) {
  return {
    type: REQUEST_USER_PRODUCTS,
    payload: products,
  }
}

// thunk actions

export function fetchProductsById(id) {
  return (dispatch) => {
    return getAllProducts(id)
      .then((res) => {
        dispatch(setProducts(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function fetchProductById(id) {
  return (dispatch) => {
    dispatch(setLoading())

    return getProductById(id)
      .then((res) => {
        dispatch(getProductDetails(res))
        return null
      })
      .catch((err) => {
        console.log(err.message, 'error')
      })
  }
}

export function fetchUserJobs(userId) {
  return (dispatch) => {
    return getUserProducts(userId)
      .then((res) => {
        dispatch(requestUserProducts(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function addNewProduct(product) {
  return (dispatch) => {
    return postProduct(product)
      .then((product) => {
        addProduct(product)
      })
      .catch((errMessage) => {
        dispatch(setError(errMessage))
      })
  }
}
