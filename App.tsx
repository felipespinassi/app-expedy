import { useEffect } from "react";
import * as Updates from "expo-updates";
import { NativeBaseProvider, StatusBar } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./src/components/Header/Header";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
