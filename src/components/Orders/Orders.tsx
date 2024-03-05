import React, { useState, useEffect, useRef } from "react";
import { getService } from "../../services/getService";
import ListOrders from "./components/ListOrders/ListOrders";
import { ActivityIndicator, Alert, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ModalFilterPedidos from "./components/ModalFilterPedidos/ModalFilterPedidos";
import { Modalize } from "react-native-modalize";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Text, View } from "tamagui";

export default function Orders({ navigation }: any) {
  const [page, setPage] = useState(1);
  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  async function fetchData() {
    try {
      const response: any = await getService("front/orders/simples", {
        page,
        pageSize: 50,
      });

      const newData = response.data.pedidos;

      const filteredData = newData.filter((newItem: any) => {
        return !pedidos.some((item: any) => item.id === newItem.id);
      });

      if (page === 1) {
        setPedidos(newData);
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
      setPage(page + 1);
    }
  }

  function onRefresh() {
    if (page != 1) {
      setLoading(true);
      setPage(1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <View width={"95%"}>
        <TouchableOpacity
          onPress={() => onOpen()}
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text fontSize={18} color={"black"}>
            Filtrar
          </Text>
          <AntDesign name="filter" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        onEndReachedThreshold={0.4}
        keyExtractor={(item: any) => item.id}
        onEndReached={onScrollScreen}
        refreshing={loading}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%" }}
        data={pedidos}
        renderItem={({ item }: any) => (
          <>
            <ListOrders navigation={navigation} item={item} />
          </>
        )}
        ListFooterComponent={<ActivityIndicator style={{ paddingTop: 10 }} size={"large"} />}
      />
      <ModalFilterPedidos
        modalizeRef={modalizeRef}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </SafeAreaView>
  );
}
