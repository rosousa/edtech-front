import axios from "axios";

const BASE_URL = "http://localhost:4000";

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

export { signUp, signIn };
