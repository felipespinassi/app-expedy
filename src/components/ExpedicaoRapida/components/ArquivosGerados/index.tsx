import { FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getService } from "../../../../services/getService";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Text, View, YStack } from "tamagui";

// interface FilesProps {
//   files:{
//     idERP_File:number,
//     status:string,
//     usuario:string
//     createdAt: string
//     id:string
//   }

// }

export default function ArquivosGerados() {
  const navigation: any = useNavigation();
  const [Files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const response: any = await getService("orders/file", {});
      setFiles(response.data.files);
    } catch (error) {}
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View theme={"light"}>
      <FlatList
        data={Files}
        renderItem={({ item }: any) => (
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
                  {/* {moment(item.date).utc(true).format("HH:mm")} */}
                </Text>
              </View>
            </YStack>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <ActivityIndicator style={{ paddingTop: 10 }} size={"large"} />
        }
      />
    </View>
  );
}
