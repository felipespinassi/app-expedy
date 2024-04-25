import { View, Text } from "react-native";
import React from "react";
import { marketplaces } from "../../../../../Orders/utils/marketplaces";
import moment from "moment";
import { Orders } from "../../../../@types/OrdersResponseTypes";

export default function ListOrders({ item }: { item: Orders }) {
  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          marginBottom: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          height: 90,
        }}
      >
        <View
          style={{
            backgroundColor: marketplaces[item.integracao.tipo]?.color,
            width: 5,
            height: "100%",
            borderRadius: 10,
          }}
        />
        <View style={{ gap: 5, width: "60%" }}>
          <Text>{item.cliente}</Text>
          <Text>{item.integracao.name}</Text>
          <Text>{item.orderid}</Text>
        </View>

        <View style={{ width: "30%" }}>
          <Text>
            <Text>
              {moment(item.dataCriacao).utc(true).format("DD/MM")}-
              {moment(item.dataCriacao).utc(true).format("HH:mm")}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
