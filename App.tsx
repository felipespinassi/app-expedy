import { useEffect } from "react";
import * as Updates from "expo-updates";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/Routes";

const Stack = createNativeStackNavigator();

const reactUpdates = async () => {
  Updates.addListener((event) => {
    if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
      Updates.reloadAsync();
    }
  });
};

export default function App() {
  useEffect(() => {
    reactUpdates();
  }, []);

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
