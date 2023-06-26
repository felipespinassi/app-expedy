import { AxiosResponse } from "axios";
import { getAccess_token } from "../storage/getAccess_token";
import { apiConfig } from "./apiConfig";

export const getService = async (url = "", params = {}) => {
  //Ter uma função para avisar quando o access token estiver para expirar
  // no mínimo faltando 30 minutos
  try {
    const response: AxiosResponse = await apiConfig.get(url, {
      params: {
        access_token: await getAccess_token(),

        ...params,
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};
