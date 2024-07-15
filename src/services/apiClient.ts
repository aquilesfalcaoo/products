import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://app-products-api-e7508e4ab5de.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
