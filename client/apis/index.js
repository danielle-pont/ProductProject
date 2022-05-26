import request from 'superagent'

// URLs
const allProductsURL = '/api/allProducts'
const myProductsURL = '/api/myProducts'

// post a new product
export function postProduct(product) {
  console.log(allProductsURL, product)
  return request
    .post(allProductsURL)
    .send(product)
    .then((response) => response.body)
    .catch((err) => console.log(err))
}

// full list of products
export function getAllProducts() {
  return request
    .get(`${allProductsURL}/allProducts`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error!'))
}

export function getProductById(id) {
  return request
    .get(`/api/allProducts/${id}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error!'))
}

// get all products by user
export function getUserProducts(userId) {
  return request
    .get(`${myProductsURL}/${userId}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error'))
}
