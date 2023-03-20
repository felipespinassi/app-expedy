import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "../screens/Dashboard";
import { Listas } from "../screens/Listas";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Bem vindo" component={Dashboard} />
      <Screen name="Listas" component={Listas} />
    </Navigator>
  );
}
