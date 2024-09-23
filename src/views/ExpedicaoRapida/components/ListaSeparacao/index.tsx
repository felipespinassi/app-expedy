import {
  ActivityIndicator,
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

export default function ListaSeparacao({ fileId }: { fileId: string }) {
  const navigation = useNavigation<any>();
  const { toast } = useToast();

  const { data, isValidating, mutate } = useSWR<PickingListProps>(
    `${config.baseURL}orders/file/picking/${fileId}`,
    fetcher
  );

  function RightAction() {
    return <Button label="" className="flex-1 h-[90%] bg-[#e0fed7]" />;
  }

  async function onSwipeTotal(produto: PickingProduct) {
    await onPickTotalQuantity(produto, fileId, toast, mutate);
  }

  function moveZerosToEnd() {
    const arr: any = data?.produtos;
    arr.sort((a: any, b: any) => {
      if (
        a.controle?.quantidadeRestante === 0 &&
        b.controle?.quantidadeRestante !== 0
      ) {
        return 1; // Coloca 'a' após 'b'
      } else if (
        a.controle?.quantidadeRestante !== 0 &&
        b.controle?.quantidadeRestante === 0
      ) {
        return -1; // Coloca 'a' antes de 'b'
      } else {
        return 0; // Mantém a ordem original
      }
    });
  }

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      mutate();
    });

    return focused;
  }, [navigation]);

  if (isValidating) {
    return (
      <View style={{ margin: 20 }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  moveZerosToEnd();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView className="pt-1">
        {data?.produtos?.map((produto, index) => {
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
                    <View className="py-1">
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
