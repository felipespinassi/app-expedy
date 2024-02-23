import { Heading, Theme, View } from "tamagui";
import ListaSeparacaoComponent from "../../../components/ExpedicaoRapida/components/ListaSeparacao";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";

export default function ListaSeparacao(props: any) {
  const file = props.route.params;
  const navigation: any = useNavigation();

  return (
    <Theme name={"light"}>
      <View
        backgroundColor={"#002851"}
        height={"15%"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>Lista de Picking</Heading>
      </View>

      <ListaSeparacaoComponent fileId={file} />
    </Theme>
  );
}
