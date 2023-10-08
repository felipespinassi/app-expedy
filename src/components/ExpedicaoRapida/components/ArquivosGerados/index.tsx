import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getService } from "../../../../services/getService";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Box, Center, VStack } from "native-base";

export default function ArquivosGerados() {
  const [Files, setFiles] = useState();
  async function fetchData() {
    try {
      const response: any = await getService("orders/file", {});
      setFiles(response.data.files);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={Files}
        renderItem={({ item }: any) => (
          <View style={{ paddingHorizontal: 10 }}>
            <VStack>
              <Center
                shadow={1}
                height={20}
                rounded={"md"}
                bg={"light.50"}
                style={{
                  marginBottom: 10,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingHorizontal: 25,
                }}
              >
                <Text>
                  {item.status === "impresso" && (
                    <Box
                      rounded="sm"
                      px={3}
                      borderWidth={1}
                      borderColor={"green.500"}
                      _text={{
                        color: "green.500",
                      }}
                      bg={"green.200"}
                    >
                      Impresso
                    </Box>
                  )}
                  {item.status === "gerada" && (
                    <Box
                      rounded="sm"
                      px={3}
                      borderWidth={1}
                      borderColor={"yellow.500"}
                      _text={{
                        color: "yellow.500",
                      }}
                      bg={"yellow.200"}
                    >
                      Gerado
                    </Box>
                  )}
                  {item.status === "aguardando" && (
                    <Box
                      rounded="sm"
                      px={3}
                      borderWidth={1}
                      borderColor={"cyan.500"}
                      _text={{
                        color: "cyan.500",
                      }}
                      bg={"cyan.200"}
                    >
                      Gerando
                    </Box>
                  )}
                </Text>
                <Text>
                  {moment(item.createdAt).utc(true).format("DD/MM")}
                  {/* {moment(item.date).utc(true).format("HH:mm")} */}
                </Text>
                <TouchableOpacity style={{ paddingTop: 5 }}>
                  <AntDesign name="printer" size={24} />
                </TouchableOpacity>
              </Center>
            </VStack>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
