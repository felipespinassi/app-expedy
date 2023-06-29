import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "../screens/Dashboard";
import { Listas } from "../screens/Listas";
import { CustomDrawer } from "../components/CustomDrawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Pedidos from "../screens/Pedidos/Pedidos";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Screen
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={18} />,
        }}
        name="Bem vindo"
        component={Dashboard}
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
