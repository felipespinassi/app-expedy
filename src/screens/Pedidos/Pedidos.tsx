import { Text, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { FlatList, View } from "native-base";
import { getService } from "../../services/getService";

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
      data={pedidos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log(item)}>
          <View
            backgroundColor={"light.200"}
            style={{ height: 100, marginBottom: 5 }}
          >
            <Text>felipinho</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
}
