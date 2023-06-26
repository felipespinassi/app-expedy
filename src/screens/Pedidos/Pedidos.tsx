import { Text, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Box, Checkbox, Divider, FlatList, Tag, View } from "native-base";
import { getService } from "../../services/getService";
import { Heading } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

import { statusHub } from "../../Objects/statusHub";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const response: any = await getService("front/orders/simples", {
        pageSize: 100,
      });

      setPedidos(response.data.pedidos);
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      {!loading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "90%" }}
          data={pedidos}
          renderItem={({ item }: any) => (
            <TouchableOpacity>
              <View
                style={{
                  height: 120,
                  marginBottom: 5,
                  padding: 5,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "space-around",
                    width: 210,
                  }}
                >
                  <Heading fontWeight={500} size="xs">
                    {item.integracao.name}
                  </Heading>
                  <Text>Data: {"26/06/2023"}</Text>

                  <Text>{item.Customer.name}</Text>
                </View>

                <View
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  {statusHub[item.status_hub]?.box}
                  <View style={{ flexDirection: "row" }}>
                    {item.erroNota && (
                      <AntDesign color={"red"} name="exclefile1" size={22} />
                    )}
                    {item.erroEtiqueta && (
                      <AntDesign color={"red"} name="filetext1" size={22} />
                    )}
                    {item.statusNota && !item.erroNota && (
                      <AntDesign color={"green"} name="exclefile1" size={22} />
                    )}
                    {item.etiqueta && !item.erroEtiqueta && (
                      <AntDesign color={"green"} name="filetext1" size={22} />
                    )}
                  </View>
                </View>
              </View>
              <Divider />
            </TouchableOpacity>
          )}
        />
      ) : (
        <OrderSkelleton />
      )}
    </View>
  );
}
