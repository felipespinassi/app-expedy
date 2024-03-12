import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN, TOKEN_EXPIRE_TIME } from "./storageConfig";
import { Alert } from "react-native";

export async function verifyInactiveAccess_token(setIsLogged: any) {
  try {
    const tokenExpireTime = await AsyncStorage.getItem(TOKEN_EXPIRE_TIME);
    if (tokenExpireTime) {
      const currentTime = new Date().getTime();
      const expireTime = parseInt(tokenExpireTime);
      const timeDifference = currentTime - expireTime;

      // Verifica se passaram 24 horas (24 horas = 24 * 60 * 60 * 1000 milissegundos)
      if (timeDifference >= 24 * 60 * 60 * 1000) {
        await AsyncStorage.removeItem(ACCESS_TOKEN);
        await AsyncStorage.removeItem(TOKEN_EXPIRE_TIME);
        Alert.alert(
          "Seu access token expirou e foi removido, faça o login novamente."
        );
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    }
  } catch (error) {}
}
