import React from "react";
import { OrderId } from "../../components/Orders/components/OrderId/OrderId";
import { Heading, View } from "native-base";
import ArrowBack from "../../components/ArrowBack/ArrowBack";

export function PedidoId({ route, navigation }: any) {
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
        <Heading
          style={{ marginBottom: 10 }}
          fontWeight={500}
          size={"md"}
          color={"white"}
        >
          Pedido:
          {route.params}
        </Heading>
      </View>
      <OrderId route={route} navigation={navigation} />
    </>
  );
}
