import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UseQueryResult, useQuery } from "react-query";
import { Button, ScrollView, Spinner, YStack } from "tamagui";
import { Swipeable } from "react-native-gesture-handler";
import { onPickTotalQuantity } from "../utils/onPickTotalQuantity";
import { useToastController } from "@tamagui/toast";
import { PickingListProps, Product } from "../../../../@types/Products";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";

export default function ListaSeparacao({ fileId }: { fileId: string }) {
  const navigation = useNavigation<any>();
  const toast = useToastController();

  const { data, isFetching, refetch }: UseQueryResult<PickingListProps> =
    useQuery(
      "ListaSeparacao",
      async () =>
        await fetcher(`${config.baseURL}orders/file/picking/${fileId}`, {})
    );

  function RightAction() {
    return (
      <Button flex={1} height={"90%"} backgroundColor={"#e0fed7"}>
        <Spinner />{" "}
      </Button>
    );
  }

  async function onSwipeTotal(produto: Product) {
    await onPickTotalQuantity(produto, fileId, toast, refetch);
  }

  function moveZerosToEnd() {
    const arr: any = data?.produtos;
    arr.sort((a: any, b: any) => {
      if (
        a.controle.quantidadeRestante === 0 &&
        b.controle.quantidadeRestante !== 0
      ) {
        return 1; // Coloca 'a' após 'b'
      } else if (
        a.controle.quantidadeRestante !== 0 &&
        b.controle.quantidadeRestante === 0
      ) {
        return -1; // Coloca 'a' antes de 'b'
      } else {
        return 0; // Mantém a ordem original
      }
    });
  }

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      refetch();
    });

    return focused;
  }, [navigation]);

  if (isFetching) {
    return (
      <View style={{ margin: 20 }}>
        <Spinner size={"large"} />
      </View>
    );
  }

  moveZerosToEnd();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView paddingTop={5}>
        {data?.produtos?.map((produto, index) => {
          return (
            <Swipeable
              key={index}
              onSwipeableOpen={() => onSwipeTotal(produto)}
              renderRightActions={RightAction}
            >
              <View>
                {produto.controle.quantidadeRestante === 0 ? (
                  <YStack paddingHorizontal={5}>
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
                        {produto.controle.quantidadeRestante}
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
                  </YStack>
                ) : (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate("ItemsToPick", { produto, fileId });
                    }}
                  >
                    <YStack paddingHorizontal={5}>
                      <View
                        style={{
                          height: 100,
                          backgroundColor: "white",
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 10,
                          flexDirection: "row",
                          paddingHorizontal: 25,
                        }}
                      >
                        <Text style={{ width: "20%", fontSize: 18 }}>
                          {produto.controle.quantidadeRestante}
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
                    </YStack>
                  </TouchableOpacity>
                )}
              </View>
            </Swipeable>
          );
        })}
      </ScrollView>
    </View>
  );
}
