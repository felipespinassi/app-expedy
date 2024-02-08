import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import Pedidos from "../screens/Pedidos/Pedidos";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DrawerRoutes } from "./drawer.routes";
import Mais from "../screens/Mais";
import { useEffect } from "react";
import { BackHandler } from "react-native";
import ExpedicaoRapida from "../screens/ExpedicaoRapida";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
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
        name="Expedicao"
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
