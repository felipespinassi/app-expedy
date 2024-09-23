import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "./components/Toast";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import "./src/styles/global.css";

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
