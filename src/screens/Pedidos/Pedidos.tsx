import { Heading, Input, View } from "native-base";
import Orders from "../../components/Orders/Orders";
import { KeyboardAvoidingView } from "react-native";

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
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Pedidos
        </Heading>
      </View>
      <Orders navigation={navigation} />
    </>
  );
}
