import { ACCESS_TOKEN, TOKEN_EXPIRE_TIME } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createAccess_token(access_token: string) {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, access_token);
    const currentTime = new Date().getTime();
    await AsyncStorage.setItem(TOKEN_EXPIRE_TIME, currentTime.toString());
  } catch (error) {
    throw error;
  }
}
