import ListaSeparacaoComponent from "../../../views/ExpedicaoRapida/components/ListaSeparacao";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header/Header";

export default function ListaSeparacao(props: any) {
  const file = props.route.params;
  const navigation: any = useNavigation();

  return (
    <>
      <Header showArrow navigation={navigation}>
        Lista de Separação
      </Header>
      <ListaSeparacaoComponent fileId={file} />
    </>
  );
}
