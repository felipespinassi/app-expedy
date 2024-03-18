import React, { useState, useEffect, useRef } from "react";
import { getService } from "../../services/getService";
import ListOrders from "./components/ListOrders/ListOrders";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  ScrollView,
  Sheet,
  Text,
  TooltipSimple,
  Unspaced,
  View,
  XStack,
} from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import DialogFilters from "./components/DialogFilters/DialogFilters";

export default function Orders({ navigation }: any) {
  const [page, setPage] = useState(1);
  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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
      <View
        backgroundColor={"white"}
        width={"100%"}
        height={30}
        justifyContent="flex-end"
        flexDirection="row"
        paddingHorizontal={5}
      >
        <DialogFilters />
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text color={"black"}>Marketplace</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              paddingBottom={20}
              paddingTop={5}
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
                  source={require("../../../assets/logos/shopee.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/mercadolivre.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/shein.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/magalu.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/skyhub.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/yampi.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/olist.png")}
                />
              </View>
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
                  source={require("../../../assets/logos/netshoes.png")}
                />
              </View>
            </ScrollView>
          </>
        )}
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
        ListFooterComponent={
          <ActivityIndicator style={{ paddingTop: 10 }} size={"large"} />
        }
      />
    </SafeAreaView>
  );
}
