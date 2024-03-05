import { useEffect } from "react";
import { ToastProvider } from "@tamagui/toast";
import { Routes } from "./src/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TamaguiProvider, createTamagui } from "tamagui";
import { StatusBar, useColorScheme } from "react-native";
import config from "./tamagui.config";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();
const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  const colorScheme = useColorScheme();
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
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme as any}>
          <ToastProvider>
            <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
            <Routes />
          </ToastProvider>
        </TamaguiProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
