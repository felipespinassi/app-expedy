import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";

import "./src/styles/global.css";
import { ToastProvider } from "./components/Toast";

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ToastProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
