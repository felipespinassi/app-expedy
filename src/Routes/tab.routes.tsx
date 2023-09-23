import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import Pedidos from "../screens/Pedidos/Pedidos";
import { Listas } from "../screens/Listas";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DrawerRoutes } from "./drawer.routes";

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
          tabBarIcon: () => <Ionicons name="home-outline" size={18} />,
        }}
        name="Home"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="cart-outline" size={18} />,
        }}
        name="Pedidos"
        component={Pedidos}
      />
      <Tab.Screen name="Listas" component={Listas} />
    </Tab.Navigator>
  );
}
