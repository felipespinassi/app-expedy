import { Text, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { FlatList, View } from "native-base";
import { getService } from "../../services/getService";
import { Heading } from "native-base";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  async function fetchData() {
    try {
      const response: any = await getService("front/orders/simples");

      setPedidos(response.data.pedidos);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ width: "100%" }}
      data={pedidos}
      renderItem={({ item }: any) => (
        <TouchableOpacity onPress={() => console.log(item.total)}>
          <View
            backgroundColor={"light.200"}
            style={{
              height: 120,
              marginBottom: 5,
              padding: 5,
              justifyContent: "space-around",
            }}
          >
            <Heading fontWeight={500} size="sm">
              {item.integracao.name}
            </Heading>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>{item.Customer.name}</Text>
              <Text>R$ {item.total}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
}
