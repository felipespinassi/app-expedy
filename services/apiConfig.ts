import axios from "axios";

const config = {
  baseURL: "https://api.expedy.com.br/",
};
export const apiConfig = axios.create(config);
