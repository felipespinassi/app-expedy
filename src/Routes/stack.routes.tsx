import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listas } from "../screens/Listas";
import { ListaSeparacao } from "../screens/Listas/ListaSeparacao";
import { Login } from "../screens/Login";
import { DrawerRoutes } from "./drawer.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Dashboard" component={DrawerRoutes} />
      <Screen name="Listas" component={Listas} />
      <Screen name="ListaSeparacao" component={ListaSeparacao} />
    </Navigator>
  );
}
