import { FlatList, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Spinner, YStack } from "tamagui";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import { UseQueryResult, useQuery } from "react-query";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FilesProps } from "../../../../@types/Files";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";

export default function ArquivosGerados() {
  const navigation = useNavigation<NavigationTypes>();

  const { data, isLoading, error }: UseQueryResult<FilesProps> = useQuery(
    "Files",
    async () => await fetcher(`${config.baseURL}orders/file`, {})
  );

  if (isLoading) {
    return (
      <View style={{ margin: 20 }}>
        <Spinner size={"large"} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data?.files}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ArquivoId", item)}
            style={{ paddingHorizontal: 10 }}
          >
            <YStack>
              <View
                style={{
                  height: 100,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  flexDirection: "row",
                  paddingHorizontal: 25,
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontSize: 12 }}>{item.idERP_File}</Text>
                <View>
                  {item.status === "impresso" && (
                    <View
                      style={{
                        borderRadius: 5,
                        backgroundColor: "#bbf7d0",
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderWidth: 1,
                        borderColor: "#22c55e",
                      }}
                    >
                      <Text style={{ color: "#22c55e" }}>Impresso</Text>
                    </View>
                  )}
                  {item.status === "gerada" && (
                    <View
                      style={{
                        padding: 3,
                        borderRadius: 5,
                        backgroundColor: "#fef08a",
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderWidth: 1,
                        borderColor: "#eab308",
                      }}
                    >
                      <Text style={{ color: "#eab308" }}>Gerado</Text>
                    </View>
                  )}
                  {item.status === "aguardando" && (
                    <View
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderWidth: 1,
                        backgroundColor: "#a5f3fc",
                        borderColor: "#06b6d4",
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ color: "#06b6d4" }}>Gerando</Text>
                    </View>
                  )}
                </View>

                <Text style={{ fontSize: 12, maxWidth: 140 }}>
                  {item.usuario}
                </Text>
                <Text style={{ fontSize: 12 }}>
                  {moment(item.createdAt).utc(true).format("DD/MM")}
                </Text>
              </View>
            </YStack>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
