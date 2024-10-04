import React, { useState, useEffect, useRef, useCallback } from "react";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FloatButton from "./components/FloatButton/FloatButton";
import { OrdersTypes } from "../../@types/OrdersTypes";
import { useForm } from "react-hook-form";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import ListEmptyComponent from "../../components/ListEmptyComponent/ListEmptyComponent";
import { useGetOrders } from "./hooks/useGetOrders";
import { MarketplacesHeader } from "./components/MarketplacesHeader/MarketplacesHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import SkeletonLoading from "./components/SkeletonLoading/SkeletonLoading";
import { ArrowUp, Filter, FilterIcon } from "lucide-react-native";
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
  }, [filters.page]);

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
    <>
      {isLoading && filters.page === 1 ? (
        <SkeletonLoading />
      ) : (
        <SafeAreaView
          style={{ alignItems: "center", flex: 1 }}
          className="bg-background dark:bg-darkBackground"
        >
          {filters.page >= 2 && (
            <TouchableOpacity
              onPress={() => {
                flatListRef.current?.scrollToOffset({
                  offset: 0,
                  animated: true,
                });
                onReset();
              }}
              style={{
                position: "absolute",
                top: "80%",
                left: "5%",
                zIndex: 10,
                backgroundColor: "#e1e1e1",
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowUp color="#3b82f6" size={22} />
            </TouchableOpacity>
          )}

          <View
            style={{
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
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
            className="bg-muted dark:bg-darkMuted"
          >
            <TouchableOpacity onPress={onReset}>
              <Text className="text-foreground dark:text-darkForeground">
                Limpar Filtros
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpenModal(true)}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text className="text-foreground dark:text-darkForeground">
                Filtros
              </Text>
              <FilterIcon color={"#3b82f6"} size={22} />
            </TouchableOpacity>
          </View>

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
            refreshing={isValidating && filters.page === 1}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <View className="px-2">
                <ListOrders
                  selectedOrders={selectedOrders}
                  selected={getSelected(item)}
                  onLongPress={onLongPress}
                  navigation={navigation}
                  item={item}
                />
              </View>
            )}
            ListEmptyComponent={isLoading ? null : <ListEmptyComponent />}
            ListFooterComponent={
              filters.page != 1 ? <ActivityIndicator size={"large"} /> : null
            }
          />
          <ModalFilters
            setFilters={setFilters}
            form={form}
            filters={filters}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          {selectedOrders.length > 0 && (
            <FloatButton
              selectedOrders={selectedOrders}
              setSelectedOrders={setSelectedOrders}
              fetchOrders={mutate}
            />
          )}
        </SafeAreaView>
      )}
    </>
  );
}
