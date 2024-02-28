import React from "react";

import { Text, View } from "tamagui";

export default function DataCustomer({ pedido }: any) {
  return (
    <View gap={5} theme={"light"}>
      <View flexDirection="row">
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>Cliente</Text>
          <Text>{pedido?.Customer.name}</Text>
        </View>
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>Pedido</Text>
          <Text>{pedido?.id}</Text>
        </View>
      </View>
      <View flexDirection="row">
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>Status Hub</Text>
          <Text>{pedido?.status_hub}</Text>
        </View>
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>Status MP</Text>
          <Text>{pedido?.status}</Text>
        </View>
      </View>
      <View flexDirection="row">
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>ID MP</Text>
          <Text>{pedido?.orderid}</Text>
        </View>
        <View
          width={"50%"}
          height={70}
          marginBottom={1}
          justifyContent="space-around"
        >
          <Text>Total do pedido</Text>
          <Text>{pedido?.total}</Text>
        </View>
      </View>
      {pedido?.Customer.CustomerAddresses.map((element: any) => {
        return (
          <View key={element}>
            <View flexDirection="row">
              <View
                width={"50%"}
                height={70}
                marginBottom={1}
                justifyContent="space-around"
              >
                <Text>Loja</Text>
                <Text>{pedido?.integracao.name}</Text>
              </View>
              <View
                width={"50%"}
                height={70}
                marginBottom={1}
                justifyContent="space-around"
              >
                <Text>Endereço/N°</Text>
                <Text>
                  {element.CustomerAddress.address}/
                  {element.CustomerAddress.number}/
                  {element.CustomerAddress.neighborhood}
                </Text>
              </View>
            </View>
            <View flexDirection="row">
              <View
                width={"50%"}
                height={70}
                overflow="hidden"
                marginBottom={1}
                justifyContent="space-around"
              >
                <Text>Cidade/Estado</Text>
                <Text>
                  {element.CustomerAddress.city}/{element.CustomerAddress.state}
                </Text>
              </View>
              <View
                width={"50%"}
                height={70}
                overflow="hidden"
                marginBottom={1}
                justifyContent="space-around"
              >
                <Text>CEP</Text>
                <Text>{element.CustomerAddress.zip_code}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
