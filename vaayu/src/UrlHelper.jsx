import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://vaayu-backend.onrender.com",
});
console.log(instance)
export default instance;