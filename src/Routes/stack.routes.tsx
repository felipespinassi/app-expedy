import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listas } from "../screens/Listas";
import { ItemsToPick } from "../screens/ItemsToPick";
import { ListaSeparacao } from "../screens/ListaSeparacao";
import { Login } from "../screens/Login";
import { DrawerRoutes } from "./drawer.routes";
import { PedidoId } from "../screens/Pedidos/PedidoId/PedidoId";
import FiltersDrawer from "../components/Orders/components/OrderId/components/FiltersDrawer/FiltersDrawer";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Dashboard" component={DrawerRoutes} />
      <Screen name="Listas" component={Listas} />
      <Screen name="ListaSeparacao" component={ListaSeparacao} />
      <Screen name="Produtos" component={ItemsToPick} />
      <Screen name="PedidoId" component={PedidoId} />
    </Navigator>
  );
}
