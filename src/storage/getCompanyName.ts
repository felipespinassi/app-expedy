import { COMPANY_NAME } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getCompanyName() {
  try {
    const storage = await AsyncStorage.getItem(COMPANY_NAME);

    const user: string = storage ? storage : "";

    return user;
  } catch (error) {
    throw error;
  }
}
