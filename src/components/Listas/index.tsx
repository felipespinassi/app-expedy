import {
  Avatar,
  Center,
  FlatList,
  Progress,
  Text,
  View,
  VStack,
} from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { ListSkelleton } from "../ListSkelleton";
import { listProgress } from "./utils/listProgress";
import { getService } from "../../services/getService";
import { ListaProps } from "../../@types/ListaProps";

export function Listas({ navigation, route }: any) {
  // const navigation = useNavigation();
  const [listas, setListas] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);

    try {
      const response: any = await getService("expedicao/lista", {
        pageSize: 10,
      });
      setListas(response.data.listas);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const firstLetterUserName = (Lista: ListaProps) => {
    const firstLetter = Lista.usuario.split("")[0];
    return firstLetter;
  };

  return (
    <SafeAreaView>
      {!loading ? (
        <FlatList
          ListEmptyComponent={<Text>Nenhuma lista encontrada</Text>}
          showsVerticalScrollIndicator={false}
          data={listas}
          keyExtractor={(item: ListaProps) => item.idERP_Lista}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ListaSeparacao", item);
              }}
            >
              <VStack style={styles.container}>
                <Center bg={"light.200"} w="100%" h="24" rounded="md">
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Text>{item.idERP_Lista}</Text>
                    </View>
                    <View>
                      <Avatar bg="yellow.500">
                        {firstLetterUserName(item)}
                      </Avatar>
                    </View>
                    <View width={"50%"}>
                      <Text style={{ marginBottom: 5 }}>{item.usuario}</Text>
                      <Progress
                        bg="#fff"
                        value={listProgress(item.pedidos)}
                        mx="1"
                        _filledTrack={{
                          bg: "lime.500",
                        }}
                      />
                    </View>
                  </View>
                </Center>
              </VStack>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ListSkelleton />
      )}
    </SafeAreaView>
  );
}
