import { Text, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Box, Divider, FlatList, Tag, View } from "native-base";
import { getService } from "../../services/getService";
import { Heading } from "native-base";
import { statusHub } from "../../Objects/statusHub";

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
        <TouchableOpacity
          onPress={() => console.log(statusHub[item.status_hub])}
        >
          <View
            style={{
              height: 120,
              marginBottom: 5,
              padding: 5,
              justifyContent: "space-around",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Heading fontWeight={500} size="sm">
                {item.integracao.name}
              </Heading>

              {statusHub[item.status_hub]?.box}
            </View>

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
          <Divider />
        </TouchableOpacity>
      )}
    />
  );
}
