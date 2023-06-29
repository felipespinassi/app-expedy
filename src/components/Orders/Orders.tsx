import React, { useState } from "react";
import { FlatList, View, Text } from "native-base";
import { getService } from "../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import ListOrders from "./components/ListOrders/ListOrders";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ModalFilters from "./components/OrderId/components/ModalFilters/ModalFilters";

export default function Orders({ navigation }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading, refetch }: any = useQuery(
    "Orders",
    async () => await getService("front/orders/simples", { pageSize: 100 })
  );
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: "90%",
          flexDirection: "row",
          paddingVertical: 10,
        }}
        onPress={() => setOpenModal(true)}
      >
        <Text>Filtros</Text>
        <AntDesign name="filter" size={22} />
      </TouchableOpacity>
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

      <ModalFilters openModal={openModal} setOpenModal={setOpenModal} />
    </View>
  );
}
