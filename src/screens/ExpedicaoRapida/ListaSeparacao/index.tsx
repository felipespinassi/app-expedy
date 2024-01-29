import { View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import React from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { Button, Center, Heading, ScrollView, Spinner, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getService } from "../../../services/getService";
import { useQuery } from "react-query";

export default function ListaSeparacao(props: any) {
  const item = props.route.params;
  const navigation: any = useNavigation();
  const {
    data: response,
    isLoading,
    refetch,
    isFetching,
  }: any = useQuery(
    "OrderComplete",
    async () => await getService(`orders/file/picking/${item}`, {})
  );

  async function handlePrintFile(item: any) {
    const response: any = await getService(`orders/file/print?id=${item}&usuario=Expedy`);
    if (response.status === 200) {
      return Alert.alert("Imprimindo");
    } else {
      return Alert.alert("Falha ao imprimir");
    }
  }
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <ArrowBack navigation={navigation} />
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Lista de Picking
        </Heading>
      </View>

      {isFetching ? (
        <Spinner />
      ) : (
        <ScrollView style={{ paddingTop: 5 }}>
          {response?.data.produtos.map((produto: any, index: any) => {
            return (
              <VStack key={index} style={{ paddingHorizontal: 5 }}>
                <Center
                  shadow={1}
                  rounded={"md"}
                  bg={"light.50"}
                  style={{
                    marginBottom: 10,
                    paddingBottom: 10,
                  }}
                >
                  <View
                    key={index}
                    style={{
                      height: 80,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      padding: 10,
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Text>{produto.reference}</Text>
                    <Text style={{ width: "40%" }}>{produto.database_name}</Text>
                    <Text>{produto.quantity}</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}
                  >
                    {/* <Button style={{ backgroundColor: "#002851" }} size={"xs"}>
                      Confirmar todos
                    </Button>
                    <Button style={{ backgroundColor: "#002851" }} size={"xs"}>
                      Selecionar quantidade
                    </Button> */}
                  </View>
                </Center>
              </VStack>
            );
          })}
        </ScrollView>
      )}

      {/* <View
        style={{
          paddingTop: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => handlePrintFile(item)}>
          <Button style={{ backgroundColor: "#002851" }}>Imprimir Arquivo</Button>
        </TouchableOpacity>
      </View> */}
    </>
  );
}
