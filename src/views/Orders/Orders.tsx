import React, { useState, useEffect, useRef } from "react";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FloatButton from "./components/FloatButton/FloatButton";
import { marketplaces } from "./utils/marketplaces";
import { OrdersTypes } from "../../@types/OrdersTypes";
import { useForm } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import ListEmptyComponent from "../../components/ListEmptyComponent/ListEmptyComponent";
import { useGetOrders } from "./hooks/useGetOrders";

export default function Orders({ navigation }: any) {
  const [selectedOrders, setSelectedOrders] = useState([] as any);
  const [filters, setFilters] = useState<any>({ page: 1 });
  const [openModal, setOpenModal] = useState(false);

  const flatListRef = useRef<FlatList>(null);
  const { data, isLoading, mutate, error, isValidating, paging } =
    useGetOrders(filters);

  const form = useForm();

  async function onScrollScreen() {
    if (!isValidating) {
      if (paging.total > data.length) {
        setFilters({ ...filters, page: filters.page + 1 });
      }
    }
  }

  function onRefresh() {
    setFilters({ ...filters, page: 1 });
  }

  function onSelectMarketplace(marketplace: string) {
    setFilters({ page: 1, marketplace: marketplace });
  }

  function onLongPress(item: OrdersTypes) {
    if (selectedOrders.includes(item.id)) {
      const newListOrder = selectedOrders.filter(
        (itemId: number) => itemId !== item.id
      );
      return setSelectedOrders(newListOrder);
    }
    setSelectedOrders([...selectedOrders, item.id]);
  }

  function getSelected(item: OrdersTypes) {
    return selectedOrders.includes(item.id);
  }

  function onReset() {
    form.reset();
    setFilters({ page: 1 });
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    setSelectedOrders([]);
  }

  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          width: "100%",
          height: 40,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          shadowColor: "black",
          shadowRadius: 2,
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 0 },
        }}
      >
        <TouchableOpacity onPress={onReset}>
          <Text>Limpar Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOpenModal(true)}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Filtros</Text>
          <ChevronDown />
        </TouchableOpacity>
      </View>
      {selectedOrders.length > 0 && (
        <FloatButton
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          fetchOrders={mutate}
        />
      )}

      <FlatList
        ref={flatListRef}
        ListHeaderComponent={() => (
          <>
            <Text style={{ color: "black", marginVertical: 10 }}>
              Marketplace
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FlatList
                keyExtractor={(item: any) => item.name.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 20, paddingTop: 5 }}
                horizontal
                data={Object.values(marketplaces)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => onSelectMarketplace(item.name)}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 60,
                        height: 60,
                        backgroundColor: "white",
                        borderRadius: 50,
                        padding: 10,
                        marginRight: 10,
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={{ width: 50, height: 40 }}
                        source={item.image}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </>
        )}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id}
        onEndReached={onScrollScreen}
        refreshing={isValidating && filters.page === 1 && data.length !== 0}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%" }}
        data={data}
        renderItem={({ item }) => (
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
        ListEmptyComponent={isLoading ? null : <ListEmptyComponent />}
        ListFooterComponent={
          <>{data.length > 10 && <ActivityIndicator size={"large"} />}</>
        }
      />
      <ModalFilters
        setFilters={setFilters}
        form={form}
        filters={filters}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </SafeAreaView>
  );
}
