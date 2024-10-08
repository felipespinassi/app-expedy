import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import Pedidos from "../screens/Pedidos/Pedidos";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mais from "../screens/Mais";
import ExpedicaoRapida from "../screens/ExpedicaoRapida";
import { Login } from "../screens/Login";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1890ff",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#333" : "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      {/* <Tab.Screen
        options={{
          tabBarStyle: { display: "none" },
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => <></>,
        }}
        name="Login"
        component={Login}
      /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
        name="Pedidos"
        component={Pedidos}
      />
      {/* <Tab.Screen
        name="Listas"
        component={Listas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Expedição"
        component={ExpedicaoRapida}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mais"
        component={Mais}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
