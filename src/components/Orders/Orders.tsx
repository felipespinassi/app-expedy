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
  // const [total, setTotal] = useState(0);
  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  async function onScrollScreen() {
    if (!hasMoreData) return;
    const response: any = await getService("front/orders/simples", {
      page,
      pageSize: 20,
    });

    if (response?.data) {
      const array = [...pedidos, ...response?.data.pedidos];

      const arraySemDuplicatas = array.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
      });

      setPedidos(arraySemDuplicatas);
      setPage(page + 1);
    }
    if (response.data.paging.total === pedidos.length) {
      setHasMoreData(false);
    }
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
        refreshing={loading}
        onRefresh={() => onScrollScreen()}
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
