import { Heading, View } from "native-base";
import { Listas as ListaComponent } from "../../components/Listas";

export function Listas({ navigation, route }: any) {
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
          Listas
        </Heading>
      </View>
      <ListaComponent navigation={navigation} route={route} />
    </>
  );
}
