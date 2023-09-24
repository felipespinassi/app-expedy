import React, { useState } from "react";
import { FlatList, View, Text, Input } from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders({ navigation }: any) {
  const { data, isLoading, refetch }: any = useQuery(
    "Orders",
    async () => await getService("front/orders/simples", { pageSize: 100 })
  );
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Input
        marginY={2}
        width={"80"}
        size={"lg"}
        placeholder="Buscar pedido..."
      />
      {!isLoading ? (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => refetch()}
          showsVerticalScrollIndicator={false}
          style={{ width: "90%" }}
          data={data?.data?.pedidos}
          renderItem={({ item }: any) => (
            <ListOrders navigation={navigation} item={item} />
          )}
        />
      ) : (
        <OrderSkelleton />
      )}
    </SafeAreaView>
  );
}
