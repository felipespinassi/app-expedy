import { ACCESS_TOKEN } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createAccess_token(access_token: string) {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, access_token);
  } catch (error) {
    throw error;
  }
}
