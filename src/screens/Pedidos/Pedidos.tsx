import { Text, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Box, Checkbox, Divider, FlatList, Tag, View } from "native-base";
import { getService } from "../../services/getService";
import { Heading } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

import { statusHub } from "../../Objects/statusHub";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  async function fetchData() {
    try {
      const response: any = await getService("front/orders/simples", {
        pageSize: 100,
      });

      setPedidos(response.data.pedidos);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
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
                justifyContent: "space-around",
              }}
            >
              <Text>Data: {"26/06/2023"}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <Checkbox
                  onChange={(e) => console.log(e)}
                  size={"md"}
                  value={"pedidos"}
                > */}
                <Heading fontWeight={500} size="xs">
                  {item.integracao.name}
                </Heading>
                {/* </Checkbox> */}
                {statusHub[item.status_hub]?.box}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>{item.Customer.name}</Text>

                <View style={{ flexDirection: "row" }}>
                  <AntDesign
                    style={{ marginRight: 15 }}
                    color={"green"}
                    name="exclefile1"
                    size={22}
                  />

                  <AntDesign color={"green"} name="filetext1" size={22} />
                </View>
              </View>
            </View>
            <Divider />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
