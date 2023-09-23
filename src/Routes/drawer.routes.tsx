import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "../screens/Dashboard";
import { Listas } from "../screens/Listas";
import { CustomDrawer } from "../components/CustomDrawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Pedidos from "../screens/Pedidos/Pedidos";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FiltersDrawer from "../components/Orders/components/OrderId/components/FiltersDrawer/FiltersDrawer";
import TabRoutes from "./tab.routes";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Screen
      
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={18} />,
        }}
        name="Bem vindo"
        component={TabRoutes}
      />
      {/* <Screen
        options={{
          drawerIcon: () => <Ionicons name="share-social-outline" size={18} />,
        }}
        name="Integrações"
        component={Pedidos}
      /> */}
      <Screen
        options={{
          drawerIcon: () => <Ionicons name="cart-outline" size={18} />,
          headerRight: () => (
            <TouchableOpacity
              style={{
                paddingRight: 20,
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Text>Filtros</Text>
              <AntDesign name="filter" size={22} />
            </TouchableOpacity>
          ),
        }}
        name="Pedidos"
        component={Pedidos}
      />
      {/* <Screen
        options={{
          drawerIcon: () => <Ionicons name="reader-outline" size={18} />,
        }}
        name="Notas fiscais"
        component={Listas}
      /> */}
      <Screen
        options={{
          drawerIcon: () => <Ionicons name="cube-outline" size={18} />,
        }}
        name="Picking "
        component={Listas}
      />
    </Navigator>
  );
}

const RightDrawer = createDrawerNavigator();

export const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: true }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={FiltersDrawer} />
    </RightDrawer.Navigator>
  );
};
