import { ACCESS_TOKEN, TOKEN_EXPIRE_TIME } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function removeAccess_token() {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
  await AsyncStorage.removeItem(TOKEN_EXPIRE_TIME);
}
