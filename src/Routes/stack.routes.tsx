import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listas } from "../screens/Listas";
import { ItemsToPick } from "../screens/Listas/ItemsToPick";
import { ListaSeparacao } from "../screens/Listas/ListaSeparacao";
import { Login } from "../screens/Login";
import { DrawerRoutes } from "./drawer.routes";
import { PedidoId } from "../screens/Pedidos/PedidoId/PedidoId";
import FiltersDrawer from "../components/Orders/components/OrderId/components/FiltersDrawer/FiltersDrawer";
import TabRoutes from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Login"
        component={Login}
      />
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Tabs"
        component={TabRoutes}
      />
      {/* <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Listas"
        component={Listas}
      /> */}
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="ListaSeparacao"
        component={ListaSeparacao}
      />
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Produtos"
        component={ItemsToPick}
      />
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="PedidoId"
        component={PedidoId}
      />
    </Navigator>
  );
}
