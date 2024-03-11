import Orders from "../../components/Orders/Orders";
import Header from "../../components/Header/Header";

export default function Pedidos({ navigation }: any) {
  return (
    <>
      <Header>Pedidos</Header>
      <Orders navigation={navigation} />
    </>
  );
}
