import { ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import DataCustomer from "./components/DataCustomer/DataCustomer";
import DataProductsSold from "./components/DataProductsSold/DataProductsSold";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowBack from "../../../ArrowBack/ArrowBack";
import { Button, ScrollView, View } from "tamagui";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";

export function OrderId({ route, navigation }: any) {
  const { data, isLoading, refetch, isFetching }: any = useQuery(
    "OrderComplete",
    async () =>
      await fetcher(`${config.baseURL}front/orders/complete/${route.params}`)
  );
  const pedido = data?.Order;

  if (isFetching) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
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
              <Button color={"#fff"} backgroundColor={"#1890ff"}>
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
