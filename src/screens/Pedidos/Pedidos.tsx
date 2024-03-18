import Orders from "../../components/Orders/Orders";
import Header from "../../components/Header/Header";
import { View } from "tamagui";

export default function Pedidos({ navigation }: any) {
  return (
    <View theme={"light"} flex={1}>
      <Header>Pedidos</Header>
      <Orders navigation={navigation} />
    </View>
  );
}
