import { Heading, Text, View } from "native-base";
import ListaSeparacaoComponent from "../../components/ListaSeparacao";
import ArrowBack from "../../components/ArrowBack/ArrowBack";

export function ListaSeparacao({ navigation, route }: any) {
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
        <ArrowBack navigation={navigation} />
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Lista numero: {route.params.idERP_Lista}
        </Heading>
      </View>
      <ListaSeparacaoComponent navigation={navigation} route={route} />
    </>
  );
}
