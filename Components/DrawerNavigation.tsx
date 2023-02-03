import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../src/screens/Dashboard";
import { Listas } from "../src/screens/ListasSeparacao";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bem vindo" component={Dashboard} />
      <Drawer.Screen name="Listas" component={Listas} />
    </Drawer.Navigator>
  );
}
