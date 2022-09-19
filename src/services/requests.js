import axios from "axios";

const BASE_URL = "https://back-edtech.herokuapp.com";

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
};

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
};

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
};

function getProduct(productId) {
  const promise = axios.get(`${BASE_URL}/products/${productId}`);
  return promise;
}

export {
  signUp,
  signIn,
  getProducts,
  getProduct
};
