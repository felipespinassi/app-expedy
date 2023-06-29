import React from "react";
import { FlatList, View } from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";

export default function Orders({ navigation }: any) {
  const { data, isLoading, refetch }: any = useQuery(
    "Orders",
    async () => await getService("front/orders/simples", { pageSize: 100 })
  );
  return (
    <View style={{ alignItems: "center" }}>
      {/* <TouchableOpacity
        style={{
          justifyContent: "flex-start",
          width: "90%",
          flexDirection: "row",
          paddingVertical: 10,
        }}
      >
        <Text>Filtros</Text>
        <AntDesign name="filter" size={22} />
      </TouchableOpacity> */}
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
    </View>
  );
}
