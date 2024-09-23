import React from "react";
import { OrderId } from "../../../views/Orders/components/OrderId/OrderId";
import Header from "../../../components/Header/Header";
import { View } from "react-native";

export function PedidoId({ route, navigation }: any) {
  return (
    <View className="flex-1">
      <Header showArrow navigation={navigation}>
        Pedido
      </Header>
      <OrderId route={route} navigation={navigation} />
    </View>
  );
}
