import { Heading, View } from "tamagui";
import Orders from "../../components/Orders/Orders";

export default function Pedidos({ navigation }: any) {
  return (
    <>
      <View
        height={"15%"}
        backgroundColor={"#002851"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <Heading color={"white"}>Pedidos</Heading>
      </View>
      <Orders navigation={navigation} />
    </>
  );
}
