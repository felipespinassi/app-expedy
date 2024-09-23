import Header from "../../components/Header/Header";
import Orders from "../../views/Orders/Orders";

export default function Pedidos({ navigation }: any) {
  return (
    <>
      <Header>Pedidos</Header>
      <Orders navigation={navigation} />
    </>
  );
}
