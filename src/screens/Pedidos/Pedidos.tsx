import Header from "../../components/Header/Header";
import { View } from "tamagui";
import Orders from "../../views/Orders/Orders";

export default function Pedidos({ navigation }: any) {
  return (
    <View theme={"light"} flex={1}>
      <Header>Pedidos</Header>
      <Orders navigation={navigation} />
    </View>
  );
}
