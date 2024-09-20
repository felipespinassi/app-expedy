import React, { useState, useEffect, useRef, useCallback } from "react";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FloatButton from "./components/FloatButton/FloatButton";
import { OrdersTypes } from "../../@types/OrdersTypes";
import { useForm } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import ListEmptyComponent from "../../components/ListEmptyComponent/ListEmptyComponent";
import { useGetOrders } from "./hooks/useGetOrders";
import { MarketplacesHeader } from "./components/MarketplacesHeader/MarketplacesHeader";

export default function Orders({ navigation }: any) {
  const [selectedOrders, setSelectedOrders] = useState([] as any);
  const [filters, setFilters] = useState<any>({ page: 1 });
  const [openModal, setOpenModal] = useState(false);

  const flatListRef = useRef<FlatList>(null);
  const flatListMarketplaceRef = useRef<FlatList>(null);

  const { data, isLoading, mutate, error, isValidating, paging } =
    useGetOrders(filters);

  const form = useForm();

  const onScrollScreen = useCallback(() => {
    if (!isValidating) {
      if (paging.total > data.length) {
        setFilters({ ...filters, page: filters.page + 1 });
      }
    }
  }, [isValidating, paging?.total, data.length]);

  const onRefresh = useCallback(() => {
    if (filters.page === 1) {
      return mutate();
    }
    setFilters((prevFilters: any) => ({ ...prevFilters, page: 1 }));
  }, []);

  const onSelectMarketplace = useCallback(
    (marketplace: string, index: number) => {
      setFilters({ page: 1, marketplace: marketplace });
    },
    []
  );

  const onLongPress = useCallback(
    (item: OrdersTypes) => {
      if (selectedOrders.includes(item.id)) {
        const newListOrder = selectedOrders.filter(
          (itemId: number) => itemId !== item.id
        );
        return setSelectedOrders(newListOrder);
      }
      setSelectedOrders([...selectedOrders, item.id]);
    },
    [selectedOrders]
  );

  const getSelected = useCallback(
    (item: OrdersTypes) => selectedOrders.includes(item.id),
    [selectedOrders]
  );

  const onReset = useCallback(() => {
    form.reset();
    setFilters({ page: 1 });
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    flatListMarketplaceRef.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setSelectedOrders([]);
  }, []);

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
        ListHeaderComponent={
          <MarketplacesHeader
            onSelectMarketplace={onSelectMarketplace}
            flatListMarketplaceRef={flatListMarketplaceRef}
          />
        }
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id}
        onEndReached={onScrollScreen}
        refreshing={isValidating}
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
