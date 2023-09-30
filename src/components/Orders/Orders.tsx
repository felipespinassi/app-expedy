import React, { useState, useEffect } from "react";
import { FlatList } from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  Alert,
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
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  async function fetchData() {
    try {
      const response: any = await getService("front/orders/simples", {
        page,
        pageSize: 20,
      });

      const newData = response.data.pedidos;

      const filteredData = newData.filter((newItem: any) => {
        return !pedidos.some((item: any) => item.id === newItem.id);
      });

      if (page === 1) {
        setPedidos(newData);
        console.log("aqui");
      } else {
        setPedidos((prevData: any) => [...prevData, ...filteredData]);
      }
    } catch (error) {
      Alert.alert("ERRO");
    } finally {
      setLoading(false);
    }
  }

  async function onScrollScreen() {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  }

  function onRefresh() {
    setLoading(true);
    setPage(1);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <FlatList
        onEndReachedThreshold={0.4}
        keyExtractor={(item: any) => item.id}
        onEndReached={onScrollScreen}
        refreshing={loading}
        onRefresh={onRefresh}
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
