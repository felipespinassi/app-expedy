import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { Box, Button, Heading, ScrollView } from "native-base";
import { getService } from "../../../../services/getService";
import { OrderSkelleton } from "../../../OrderSkelleton/OrderSkelleton";
import DataCustomer from "./components/DataCustomer/DataCustomer";
import DataProductsSold from "./components/DataProductsSold/DataProductsSold";

export function OrderId({ route }: any) {
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
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
      }}
    >
      <Heading style={{ marginBottom: 20 }} fontWeight={500} size={"md"}>
        Pedido:
        {route.params}
      </Heading>

      <ScrollView showsVerticalScrollIndicator={false} width={"90%"}>
        <View>
          <DataCustomer pedido={pedido} />

          <View style={{ marginVertical: 20 }}>
            <Button>Atualizar informações</Button>
          </View>

          <DataProductsSold pedido={pedido} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
