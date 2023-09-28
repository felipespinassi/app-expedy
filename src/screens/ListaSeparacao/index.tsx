import { View } from "native-base";
import ListaSeparacaoComponent from "../../components/ListaSeparacao";

export function ListaSeparacao({ navigation, route }: any) {
  return (
    <>
      <ListaSeparacaoComponent navigation={navigation} route={route} />
    </>
  );
}
