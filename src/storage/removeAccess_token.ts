import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN } from "./storageConfig";

export async function removeAccess_token() {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
}
