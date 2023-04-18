import { COMPANY_NAME } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createCompanyName(user: string) {
  try {
    await AsyncStorage.setItem(COMPANY_NAME, user);
  } catch (error) {
    throw error;
  }
}
