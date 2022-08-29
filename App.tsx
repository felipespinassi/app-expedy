import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as Updates from "expo-updates";
import { Login } from "./src/screens/Login";
import { extendTheme, NativeBaseProvider, themeTools } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./src/screens/Dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigation } from "./Components/DrawerNavigation";

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
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
