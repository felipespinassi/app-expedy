import React, { useState, useEffect, useRef } from "react";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView, Text, View } from "tamagui";
import DialogFilters from "./components/DialogFilters/DialogFilters";
import FloatButton from "./components/FloatButton/FloatButton";
import { marketplaces } from "./utils/marketplaces";
import ListEmptyComponent from "../ListEmptyComponent/ListEmptyComponent";
import fetcher from "../../services/fetcher";
import { config } from "../../services/apiConfig";
import { OrdersTypes } from "../../@types/OrdersTypes";

export default function Orders({ navigation }: any) {
  const [page, setPage] = useState(1);
  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([] as any);
  const [marketplace, setMarkeplace] = useState("");

  async function fetchOrders() {
    setLoading(true);
    try {
      const response: any = await fetcher(
        `${config.baseURL}front/orders/simples?page=${page}&pageSize=20&marketplace=${marketplace}`
      );
      const newData = response.pedidos;

      const filteredData = newData.filter((newItem: any) => {
        return !pedidos.some((item: any) => item.id === newItem.id);
      });
      if (page === 1) {
        setPedidos(newData);
      } else {
        setPedidos((prevData: any) => [...prevData, ...filteredData]);
      }
    } catch (error) {
      Alert.alert("Falha ao buscar pedidos");
      console.log(error);
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

  function onSelectMarketplace(marketplace: string) {
    setMarkeplace(marketplace);
    setPage(1);
  }

  useEffect(() => {
    fetchOrders();
  }, [page, marketplace]);

  function onLongPress(item: OrdersTypes) {
    if (selectedOrders.includes(item.id)) {
      const newListOrder = selectedOrders.filter(
        (itemId: any) => itemId !== item.id
      );
      return setSelectedOrders(newListOrder);
    }
    setSelectedOrders([...selectedOrders, item.id]);
  }

  function getSelected(item: any) {
    return selectedOrders.includes(item.id);
  }
  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <View
        backgroundColor={"white"}
        width={"100%"}
        height={40}
        justifyContent="flex-end"
        flexDirection="row"
        paddingHorizontal={5}
      >
        <DialogFilters />
      </View>
      {selectedOrders.length > 0 && (
        <FloatButton
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          fetchOrders={fetchOrders}
        />
      )}

      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text color={"black"}>Marketplace</Text>
            <View justifyContent="center" alignItems="center">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                paddingBottom={20}
                paddingTop={5}
              >
                <TouchableOpacity
                  key={"Todos"}
                  onPress={() => onSelectMarketplace("")}
                >
                  <View
                    justifyContent="center"
                    alignItems="center"
                    width={60}
                    height={60}
                    backgroundColor={"white"}
                    borderRadius={50}
                    padding={10}
                    marginRight={10}
                  >
                    <Text fontSize={12}>Todos</Text>
                  </View>
                </TouchableOpacity>
                {Object.values(marketplaces).map((element) => {
                  return (
                    <TouchableOpacity
                      key={element.name}
                      onPress={() => onSelectMarketplace(element.name)}
                    >
                      <View
                        justifyContent="center"
                        alignItems="center"
                        width={60}
                        height={60}
                        backgroundColor={"white"}
                        borderRadius={50}
                        padding={10}
                        marginRight={10}
                      >
                        <Image
                          resizeMode="contain"
                          style={{ width: 50, height: 40 }}
                          source={element.image}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
        onEndReachedThreshold={0.6}
        keyExtractor={(item: any) => item.id}
        onEndReached={onScrollScreen}
        refreshing={loading}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%" }}
        data={pedidos}
        renderItem={({ item }: any) => (
          <>
            <ListOrders
              selectedOrders={selectedOrders}
              selected={getSelected(item)}
              onLongPress={onLongPress}
              navigation={navigation}
              item={item}
            />
          </>
        )}
        ListEmptyComponent={<ListEmptyComponent />}
        ListFooterComponent={
          <>{pedidos.length >= 10 && <ActivityIndicator size={"large"} />}</>
        }
      />
    </SafeAreaView>
  );
}
