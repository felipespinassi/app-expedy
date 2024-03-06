import { TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UseQueryResult, useIsFetching, useQuery } from "react-query";
import { ScrollView, Spinner, Text, Theme, View, YStack } from "tamagui";
import { getService } from "../../../../services/getService";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import { ToastDemo } from "../../../ToastDemo";

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
  const navigation = useNavigation<any>();
  const {
    data: response,
    isFetching,
    refetch,
  }: UseQueryResult<PickingListProps> = useQuery(
    "ListaSeparacao",
    async () => await getService(`orders/file/picking/${fileId}`, {})
  );

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      refetch();
    });

    return focused;
  }, [navigation]);

  if (isFetching) {
    return (
      <View margin={20}>
        <Spinner size={"large"} />
      </View>
    );
  }


  function moveZerosToEnd() {
    const arr: any = response?.data.produtos
    arr.sort((a: any, b: any) => {
      if (a.controle.quantidadeRestante === 0 && b.controle.quantidadeRestante !== 0) {
        return 1; // Coloca 'a' após 'b'
      } else if (a.controle.quantidadeRestante !== 0 && b.controle.quantidadeRestante === 0) {
        return -1; // Coloca 'a' antes de 'b'
      } else {
        return 0; // Mantém a ordem original
      }
    });


  }
  moveZerosToEnd()


  return (
    <Theme name={"light"}>
      <ScrollView paddingTop={5}>
        {response?.data.produtos?.map((produto, index) => {


          return (

            <View key={index}>

              {produto.controle.quantidadeRestante === 0 ? <YStack paddingHorizontal={5}>
                <View
                  height={80}
                  backgroundColor={"$green4Light"}
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
              </YStack> : <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("ItemsToPick", { produto, fileId });
                }}
              >

                <YStack paddingHorizontal={5}>
                  <View
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

              </TouchableOpacity>}

            </View>

          );
        })}
      </ScrollView>
    </Theme>
  );
}
