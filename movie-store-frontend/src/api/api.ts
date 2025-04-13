import axios from "axios";

const API_BASE_URL = "https://localhost:44343/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
