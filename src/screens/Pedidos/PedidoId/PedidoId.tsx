import React from "react";
import { OrderId } from "../../../components/Orders/components/OrderId/OrderId";
import Header from "../../../components/Header/Header";
import { View } from "tamagui";

export function PedidoId({ route, navigation }: any) {
  return (
    <View theme={"light"} flex={1}>
      <Header showArrow navigation={navigation}>
        Pedido
      </Header>
      <OrderId route={route} navigation={navigation} />
    </View>
  );
}
