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
  const [total, setTotal] = useState(0);
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
      setPedidos((prev: any) => [...prev, ...response?.data.pedidos]);
      setTotal(response?.data.paging.total);
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

      {!loading ? (
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
      ) : (
        <OrderSkelleton />
      )}
    </SafeAreaView>
  );
}
