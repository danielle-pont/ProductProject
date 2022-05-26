import request from 'superagent'

// URLs
const allProductsURL = '/api/allProducts'

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
