import axios from "axios";

export const ApiService = axios.create({
  baseURL: "http://26.91.70.227:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
