import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "./storageConfig";

export async function removeCompanyName() {
  await AsyncStorage.removeItem(COMPANY_NAME);
}
