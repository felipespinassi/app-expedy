import React from "react";
import { OrderId } from "../../../components/Orders/components/OrderId/OrderId";
import Header from "../../../components/Header/Header";

export function PedidoId({ route, navigation }: any) {
  return (
    <>
      <Header showArrow navigation={navigation}>
        Pedido
      </Header>
      <OrderId route={route} navigation={navigation} />
    </>
  );
}
