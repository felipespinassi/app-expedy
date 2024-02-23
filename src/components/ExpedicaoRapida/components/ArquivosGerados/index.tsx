import { FlatList } from "react-native";
import React from "react";
import { getService } from "../../../../services/getService";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Spinner, Text, View, YStack } from "tamagui";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import { UseQueryResult, useQuery } from "react-query";
import { TouchableOpacity } from "react-native-gesture-handler";

interface FilesProps {
  data: {
    files: [
      {
        orders: [];
        usuario: string;
        status: string;
        contains: [];
        orders_errors: [];
        company: string;
        createdAt: string;
        updatedAt: string;
        idERP_File: number;
        path: string;
      }
    ];
  };
}

export default function ArquivosGerados() {
  const navigation = useNavigation<NavigationTypes>();

  const { data: response, isLoading }: UseQueryResult<FilesProps> = useQuery(
    "Files",
    async () => await getService(`orders/file`, {})
  );

  if (isLoading) {
    return (
      <View margin={20}>
        <Spinner size={"large"} />
      </View>
    );
  }

  return (
    <View theme={"light"}>
      <FlatList
        data={response?.data.files}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ArquivoId", item)}
            style={{ paddingHorizontal: 10 }}
          >
            <YStack>
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
                <Text style={{ fontSize: 12 }}>{item.idERP_File}</Text>
                <View>
                  {item.status === "impresso" && (
                    <View
                      borderRadius={5}
                      backgroundColor={"#bbf7d0"}
                      paddingHorizontal={5}
                      paddingVertical={2}
                      borderWidth={1}
                      borderColor={"#22c55e"}
                    >
                      <Text color={"#22c55e"}>Impresso</Text>
                    </View>
                  )}
                  {item.status === "gerada" && (
                    <View
                      padding={3}
                      borderRadius={5}
                      backgroundColor={"#fef08a"}
                      paddingHorizontal={5}
                      paddingVertical={2}
                      borderWidth={1}
                      borderColor={"#eab308"}
                    >
                      <Text color={"#eab308"}>Gerado</Text>
                    </View>
                  )}
                  {item.status === "aguardando" && (
                    <View
                      paddingHorizontal={5}
                      paddingVertical={2}
                      borderWidth={1}
                      backgroundColor={"#a5f3fc"}
                      borderColor={"#06b6d4"}
                      borderRadius={5}
                    >
                      <Text color={"#06b6d4"}>Gerando</Text>
                    </View>
                  )}
                </View>

                <Text fontSize={12} maxWidth={140}>
                  {item.usuario}
                </Text>
                <Text fontSize={12}>
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
