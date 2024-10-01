import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  TOKEN_EXPIRE_TIME,
} from "./storageConfig";
import { Alert } from "react-native";
import { config } from "../services/apiConfig";
import { createAccess_token } from "./createAccess_token";
import { createRefreshToken } from "./createRefreshToken";
import { Dispatch, SetStateAction } from "react";

export async function verifyInactiveAccess_token(
  setIsLogged: Dispatch<SetStateAction<boolean>>
) {
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);
  const tokenExpireTime = await AsyncStorage.getItem(TOKEN_EXPIRE_TIME);

  try {
    if (tokenExpireTime) {
      const currentTime = new Date().getTime();
      const expireTime = parseInt(tokenExpireTime);
      const timeDifference = currentTime - expireTime;

      // Verifica se passaram 24 horas (24 horas = 24 * 60 * 60 * 1000 milissegundos)
      if (timeDifference >= 24 * 60 * 60 * 1000) {
        try {
          const response = await fetch(
            `${config.baseURL}auth?refresh=true&refresh_token=${refreshToken}`,
            {
              method: "GET",
            }
          );

          const data = await response.json();

          await Promise.all([
            createAccess_token(data.access_token),
            createRefreshToken(data.refresh_token),
          ]);
          setIsLogged(true);
        } catch (error) {
          await AsyncStorage.removeItem(ACCESS_TOKEN);
          await AsyncStorage.removeItem(TOKEN_EXPIRE_TIME);
          setIsLogged(false);
          Alert.alert("Sua sessão expirou, por favor, faça login novamente.");
        }
      } else {
        setIsLogged(true);
      }
    }
  } catch (error) {}
}
