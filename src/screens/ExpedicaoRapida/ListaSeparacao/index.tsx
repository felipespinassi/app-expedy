import { Heading, View } from "tamagui";
import ListaSeparacaoComponent from "../../../components/ExpedicaoRapida/components/LIstaSeparacao";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";

export default function ListaSeparacao(props: any) {


  const file = props.route.params;
  const navigation: any = useNavigation();


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
        <Heading color={"white"}>Lista de Picking</Heading>
      </View>


      <ListaSeparacaoComponent file={file} />

    </>
  );
}
