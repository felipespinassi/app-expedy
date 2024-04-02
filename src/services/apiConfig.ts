import axios from "axios";

export const config = {
  baseURL: "https://api.expedy.com.br/",
};
export const apiConfig = axios.create(config);
