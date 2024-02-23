import { TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { ScrollView, Spinner, Text, Theme, View, YStack } from "tamagui";
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
    <Theme name={"light"}>
      {isFetching ? (
        <Spinner />
      ) : (
        <ScrollView style={{ paddingTop: 5 }}>
          {response?.data.produtos?.map((produto: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("ItemsToPick", produto, file);
                }}
              >
                <YStack style={{ paddingHorizontal: 5 }}>
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
                      {produto.quantity}
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
      )}
    </Theme>
  );
}
