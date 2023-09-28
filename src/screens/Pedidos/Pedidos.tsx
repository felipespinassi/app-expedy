import { Input, View } from "native-base";
import Orders from "../../components/Orders/Orders";

export default function Pedidos({ navigation }: any) {
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Input
          width={"90%"}
          backgroundColor={"white"}
          placeholder="Buscar Pedido Pelo ID"
          rounded={"full"}
        />
      </View>
      <Orders navigation={navigation} />
    </>
  );
}
