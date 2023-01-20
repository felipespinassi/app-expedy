import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../src/screens/Dashboard";
import { Listas } from "../src/screens/Listas";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bem vindo" component={Dashboard} />
      <Drawer.Screen name="Lista de separação" component={Listas} />
    </Drawer.Navigator>
  );
}
