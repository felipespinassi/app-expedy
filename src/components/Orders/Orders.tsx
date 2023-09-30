import React, { useState, useEffect } from "react";
import { FlatList } from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Orders({ navigation }: any) {
  // const { data, isLoading, refetch }: any = useQuery(
  //   "Orders",
  //   async () =>
  //     await getService("front/orders/simples", { pageSize: 10, page: page })
  // );
  const [page, setPage] = useState(1);
  const [pedidos, setPedidos] = useState<any>([]);
  const [hasMoreData, setHasMoreData] = useState(true);

  async function onScrollScreen() {
    if (!hasMoreData) return;
    try {
      const response: any = await getService("front/orders/simples", {
        page,
        pageSize: 20,
      });

      const newData = response.data.pedidos;

      const filteredData = newData.filter((newItem: any) => {
        return !pedidos.some((item: any) => item.id === newItem.id);
      });

      setPedidos((prevData: any) => [...prevData, ...filteredData]);
      setPage(page + 1);
    } catch (error) {}
  }

  useEffect(() => {
    onScrollScreen();
  }, []);

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <FlatList
        onEndReachedThreshold={0.4}
        keyExtractor={(item: any) => item.id}
        onEndReached={onScrollScreen}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%", marginBottom: 120 }}
        data={pedidos}
        renderItem={({ item }: any) => (
          <>
            <ListOrders navigation={navigation} item={item} />
          </>
        )}
        ListFooterComponent={
          <ActivityIndicator style={{ paddingTop: 10 }} size={"large"} />
        }
      />
    </SafeAreaView>
  );
}
