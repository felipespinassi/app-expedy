import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
import { onPickTotalQuantity } from "../../utils/onPickTotalQuantity";

import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import useSWR from "swr";
import { PickingListProps, PickingProduct } from "../../@types/PickingProduct";
import { Button } from "../../../../../components/Button";
import { useToast } from "../../../../../components/Toast";
import ListEmptyComponent from "../../../../components/ListEmptyComponent/ListEmptyComponent";

export default function ListaSeparacao({ fileId }: { fileId: string }) {
  const navigation = useNavigation<any>();
  const { toast } = useToast();

  const { data, isValidating, mutate } = useSWR<PickingListProps>(
    `${config.baseURL}orders/file/picking/${fileId}`,
    fetcher
  );

  function RightAction() {
    return <Button className="flex-1 m-2  h-[90%] bg-[#e0fed7]" />;
  }

  async function onSwipeTotal(produto: PickingProduct) {
    await onPickTotalQuantity(produto, fileId, toast, mutate);
  }

  const products = data?.produtos && [
    ...data.produtos.filter(
      (produto) => produto.controle?.quantidadeRestante !== 0
    ),
    ...data.produtos.filter(
      (produto) => produto.controle?.quantidadeRestante === 0
    ),
  ];

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      mutate();
    });

    return focused;
  }, [navigation]);

  if (isValidating) {
    return (
      <SafeAreaView className=" h-screen bg-background dark:bg-darkBackground">
        <ActivityIndicator style={{ paddingTop: 20 }} size={"large"} />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1 }} className="bg-background dark:bg-darkBackground">
      <ScrollView className="pt-1">
        {products ? (
          products?.map((produto, index) => {
            return (
              <Swipeable
                key={index}
                onSwipeableOpen={() => onSwipeTotal(produto)}
                renderRightActions={RightAction}
              >
                <View>
                  {produto?.controle?.quantidadeRestante === 0 ? (
                    <View className="px-1">
                      <View
                        style={{
                          height: 100,
                          backgroundColor: "#e0fed7",
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 10,
                          flexDirection: "row",
                          paddingHorizontal: 25,
                        }}
                      >
                        <Text style={{ width: "20%", fontSize: 18 }}>
                          {produto?.controle?.quantidadeRestante}
                        </Text>

                        <View style={{ width: "80%", gap: 7 }}>
                          <Text style={{ fontSize: 14 }}>
                            <Text style={{ color: "gray" }}>SKU: </Text>
                            {produto.reference}
                          </Text>
                          <Text style={{ fontSize: 14 }}>
                            <Text style={{ color: "gray" }}>Descricao: </Text>
                            {produto.database_name}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        navigation.navigate("ItemsToPick", { produto, fileId });
                      }}
                    >
                      <View className="py-1 px-2">
                        <View
                          style={{
                            height: 100,
                            borderRadius: 5,
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingHorizontal: 25,
                          }}
                          className="bg-muted dark:bg-darkMuted"
                        >
                          <Text
                            className="text-foreground dark:text-darkForeground"
                            style={{ width: "20%", fontSize: 18 }}
                          >
                            {produto?.controle?.quantidadeRestante}
                          </Text>

                          <View style={{ width: "80%", gap: 7 }}>
                            <Text
                              className="text-foreground dark:text-darkForeground"
                              style={{ fontSize: 14 }}
                            >
                              <Text style={{ color: "gray" }}>SKU: </Text>
                              {produto.reference}
                            </Text>
                            <Text
                              className="text-foreground dark:text-darkForeground"
                              style={{ fontSize: 14 }}
                            >
                              <Text style={{ color: "gray" }}>Descricao: </Text>
                              {produto.database_name}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </Swipeable>
            );
          })
        ) : (
          <ListEmptyComponent>asasasasasas</ListEmptyComponent>
        )}
      </ScrollView>
    </View>
  );
}
