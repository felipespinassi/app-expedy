import { TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UseQueryResult, useIsFetching, useQuery } from "react-query";
import { ScrollView, Spinner, Text, Theme, View, YStack } from "tamagui";
import { getService } from "../../../../services/getService";
import { NavigationTypes } from "../../../../@types/NavigationTypes";

interface PickingListProps {
  data: {
    produtos: [
      {
        controle: {
          quantidadeConferida: number;
          quantidadeRestante: number;
          quantidadeTotal: number;
        };
        database_name: string;
        id: string;
        order_id: string;
        original_name: string;
        price: number;
        product_id: string;
        product_kit_id: string;
        produtoAlterado: boolean;
        quantity: number;
        reference: string;
        tax_name: string;
        variacao: string;
      }
    ];
  };
}

export default function ListaSeparacao({ fileId }: { fileId: string }) {
  const navigation = useNavigation<NavigationTypes>();
  const { data: response, isFetching }: UseQueryResult<PickingListProps> =
    useQuery(
      "OrderComplete",
      async () => await getService(`orders/file/picking/${fileId}`, {})
    );

  console.log(response?.data.produtos);

  if (isFetching) {
    return (
      <View margin={20}>
        <Spinner size={"large"} />
      </View>
    );
  }

  return (
    <Theme name={"light"}>
      <ScrollView paddingTop={5}>
        {response?.data.produtos?.map((produto, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("ItemsToPick", { produto, fileId });
              }}
            >
              <YStack paddingHorizontal={5}>
                <View
                  key={produto.reference}
                  height={80}
                  backgroundColor={"white"}
                  borderRadius={5}
                  alignItems="center"
                  justifyContent={"space-between"}
                  marginBottom={10}
                  flexDirection="row"
                  paddingHorizontal={25}
                >
                  <Text width={"20%"} fontSize={"$6"}>
                    {produto.controle.quantidadeRestante}
                  </Text>

                  <View width={"80%"} gap={7}>
                    <Text fontSize={"$4"}>
                      <Text color={"$gray10"}>SKU: </Text>
                      {produto.reference}
                    </Text>
                    <Text fontSize={"$4"}>
                      <Text color={"$gray10"}>Descricao: </Text>
                      {produto.database_name}
                    </Text>
                  </View>
                </View>
              </YStack>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Theme>
  );
}
