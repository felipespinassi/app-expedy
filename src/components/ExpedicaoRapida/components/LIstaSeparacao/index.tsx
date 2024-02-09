import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import {

  ScrollView,
  Text,

} from "tamagui";
import { Center, Spinner, VStack } from "native-base";
import { getService } from "../../../../services/getService";

export default function ListaSeparacao({ file }: any) {


  const navigation: any = useNavigation();
  const {
    data: response,
    isLoading,
    refetch,
    isFetching,
  }: any = useQuery(
    "OrderComplete",
    async () => await getService(`orders/file/picking/${file}`, {})
  );

  return (
    <>

      {isFetching ? (
        <Spinner />
      ) : (
        <ScrollView style={{ paddingTop: 5 }}>

          {response?.data.produtos?.map((produto: any, index: any) => {

            return (
              <TouchableOpacity onPress={() => { navigation.navigate('ItemsToPick', produto) }}>

                <VStack style={{ paddingHorizontal: 5 }}>
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
                      key={produto.reference}
                      style={{
                        height: 90,
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        paddingLeft: 20
                      }}
                    >
                      <Text style={{ width: "20%" }} fontSize={'$6'} color={'$background'}> {produto.quantity}</Text>

                      <View style={{ width: "80%", gap: 7 }}>
                        <Text fontSize={'$4'} color={'$background'}><Text color={'$gray10'} >SKU: </Text>{produto.reference}</Text>
                        <Text fontSize={'$4'} color={'$background'}  ><Text color={'$gray10'} >Descricao: </Text>  {produto.database_name}</Text>

                      </View>
                    </View>


                  </Center>
                </VStack>
              </TouchableOpacity>

            );
          })}
        </ScrollView>
      )}


    </>
  );
}
