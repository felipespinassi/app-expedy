import { REFRESH_TOKEN } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createRefreshToken(access_token: string) {
  try {
    await AsyncStorage.setItem(REFRESH_TOKEN, access_token);
  } catch (error) {
    throw error;
  }
}
