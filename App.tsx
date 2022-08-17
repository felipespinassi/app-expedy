import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as Updates from "expo-updates";
import { StyleSheet, View } from "react-native";
import { Login } from "./src/screens/Login";
import { extendTheme, NativeBaseProvider, themeTools } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./src/screens/Dashboard";

// const theme = extendTheme({
//   components: {
//     Input: {
//       // _focus: {
//       //   rounded: 'md',
//       // },
//       baseStyle: {
//         color: "emerald.400",
//       },
//     },
//   },
// });
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    reactUpdates();
  }, []);

  const reactUpdates = async () => {
    Updates.addListener((event) => {
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Updates.reloadAsync();
      }
    });
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
