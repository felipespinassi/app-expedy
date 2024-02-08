import { useEffect } from "react";
import * as Updates from "expo-updates";
import { NativeBaseProvider, StatusBar } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TamaguiProvider, createTamagui } from "tamagui";
import { useColorScheme } from "react-native";
import config from "./tamagui.config";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <TamaguiProvider config={config}>
            <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
            <Routes />
          </TamaguiProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
