import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getService } from "../../../../services/getService";
import moment from "moment";
import { Box, Center, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

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

  const navigation:any = useNavigation()
  const [Files, setFiles] = useState ([]);

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
    <SafeAreaView>
      <FlatList
        data={Files}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => navigation.navigate('ArquivoGerado',item)} style={{ paddingHorizontal: 10 }}>
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
                <Text style={{fontSize:12}}>{item.idERP_File}</Text>

                <Text >
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
                <Text style={{fontSize:12, maxWidth:140}}>{item.usuario}</Text>
                <Text style={{fontSize:12}}>
                  {moment(item.createdAt).utc(true).format("DD/MM")}
                  {/* {moment(item.date).utc(true).format("HH:mm")} */}
                </Text>
               
              </Center>
            </VStack>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <ActivityIndicator style={{ paddingTop: 10 }} size={"large"} />
        }
      />
    </SafeAreaView>
  );
}
