import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import { Box, Button, Heading, ScrollView } from "native-base";
import { getService } from "../../../../services/getService";
import { OrderSkelleton } from "../../../OrderSkelleton/OrderSkelleton";
import DataCustomer from "./components/DataCustomer/DataCustomer";
import DataProductsSold from "./components/DataProductsSold/DataProductsSold";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowBack from "../../../ArrowBack/ArrowBack";

export function OrderId({ route, navigation }: any) {
  const { data, isLoading, refetch, isFetching }: any = useQuery(
    "OrderComplete",
    async () => await getService(`front/orders/complete/${route.params}`, {})
  );
  const pedido = data?.data?.Order;

  if (isFetching) {
    return (
      <SafeAreaView>
        <OrderSkelleton />
      </SafeAreaView>
    );
  }
  return (
    <>
      <SafeAreaView
        style={{
          alignItems: "center",
          marginTop: 10,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} width={"90%"}>
          <View>
            <DataCustomer pedido={pedido} />

            <TouchableOpacity style={{ marginVertical: 20 }}>
              <Button style={{ backgroundColor: "#002851" }}>
                Atualizar informações
              </Button>
            </TouchableOpacity>

            <DataProductsSold pedido={pedido} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
