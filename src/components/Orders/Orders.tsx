import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Input,
  useDisclose,
  Actionsheet,
  Box,
} from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";
import { SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Orders({ navigation }: any) {
  const { data, isLoading, refetch }: any = useQuery(
    "Orders",
    async () => await getService("front/orders/simples", { pageSize: 50 })
  );
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      {/* <View
        style={{
          width: "90%",
          marginVertical: 5,
        }}
      >
        <Input placeholder="Buscar Pedido Pelo ID" rounded={"full"} />
      </View> */}
      {/* <TouchableOpacity>
        <View
          style={{
            justifyContent: "flex-end",
            width: "90%",
            marginVertical: 5,
            alignItems: "center",
          }}
          flexDirection={"row"}
        >
          <Text>Filtrar</Text>
          <AntDesign name="filter" size={22} />
        </View>
      </TouchableOpacity> */}

      {!isLoading ? (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => refetch()}
          showsVerticalScrollIndicator={false}
          style={{ width: "95%" }}
          data={data?.data?.pedidos}
          renderItem={({ item }: any) => (
            <>
              <ListOrders navigation={navigation} item={item} />
            </>
          )}
        />
      ) : (
        <OrderSkelleton />
      )}
    </SafeAreaView>
  );
}
