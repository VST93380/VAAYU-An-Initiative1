import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: window.location.origin,
});
console.log(instance)
export default instance;