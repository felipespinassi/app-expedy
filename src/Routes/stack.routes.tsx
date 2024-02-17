import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { PedidoId } from "../screens/Pedidos/PedidoId/PedidoId";
import TabRoutes from "./tab.routes";
import ArquivosGerados from "../screens/ExpedicaoRapida/ArquivosGerados";
import ListaSeparacao from "../screens/ExpedicaoRapida/ListaSeparacao";
import ArquivoId from "../screens/ExpedicaoRapida/ArquivoId";
import ItemsToPick from "../screens/ExpedicaoRapida/ItemsToPick";
import Expedir from "../screens/ExpedicaoRapida/Expedir";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Tabs" component={TabRoutes} />
      <Screen name="PedidoId" component={PedidoId} />
      <Screen name="ArquivosGerados" component={ArquivosGerados} />
      <Screen name="ListaSeparacao" component={ListaSeparacao} />
      <Screen name="ArquivoId" component={ArquivoId} />
      <Screen name="ItemsToPick" component={ItemsToPick} />
      <Screen name="Expedir" component={Expedir}/>
    </Navigator>
  );
}
