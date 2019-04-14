import axios from "axios";

const api = axios.create({
  baseURL: "https://my-omnistack-app-backend.herokuapp.com"
});

export default api;
