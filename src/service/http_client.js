import axios from "axios";

const API_DEV = "https://lets-team-project.herokuapp.com/api/";
const API_PRODUCT = "product api 주소";
const baseURL = process.env.NODE_ENV === "development" ? API_DEV : API_PRODUCT;
const httpClient = axios.create({
  baseURL,
  withCredentials: true,
});
export default httpClient;
