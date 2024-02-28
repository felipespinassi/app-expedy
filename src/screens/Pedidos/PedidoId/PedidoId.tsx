import React from "react";
import { OrderId } from "../../../components/Orders/components/OrderId/OrderId";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { Heading, View } from "tamagui";

export function PedidoId({ route, navigation }: any) {
  return (
    <>
      <View
        height={"15%"}
        backgroundColor={"#002851"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>
          Pedido:
          {route.params}
        </Heading>
      </View>
      <OrderId route={route} navigation={navigation} />
    </>
  );
}
