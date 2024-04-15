import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { useQuery } from "react-query";
import DataCustomer from "./components/DataCustomer/DataCustomer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowBack from "../../../ArrowBack/ArrowBack";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { Button } from "tamagui";

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
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: 10,
          flex: 1,
        }}
      >
        <ScrollView
          style={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <DataCustomer pedido={pedido} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
