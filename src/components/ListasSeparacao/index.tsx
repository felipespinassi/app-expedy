import axios from "axios";
import { Avatar, Divider, FlatList, Progress, Text, View } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { getAccess_token } from "../../storage/getAccess_token";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  idERP_Lista: string;
  pedidos: any;
  usuario: any;
};

export function ListasSeparacao({ navigation }: any) {
  // const navigation = useNavigation();
  const [listas, setListas] = useState([]);
  async function fetchData() {
    try {
      const access_token = await getAccess_token();
      const response = await axios.get(
        "https://api.expedy.com.br/expedicao/lista",
        {
          params: {
            pageSize: 20,
            access_token: access_token,
          },
        }
      );
      setListas(response.data.listas);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  // onPress={() => navigation.navigate("Lista", item)}

  const listProgress = (pedidos: any) => {
    const pedidosParaExpedir = pedidos?.length;
    const pedidosExpedidos = pedidos?.filter(
      (pedido: any) => pedido.status_hub === "completo"
    ).length;
    const progress = pedidosExpedidos / pedidosParaExpedir;

    return Math.round(progress * 100);
  };

  const firstLetterUserName = (item: any) => {
    const firstLetter = item.usuario.split("")[0];

    return firstLetter;
  };

  return (
    <>
      <FlatList
        data={listas}
        keyExtractor={(item: Props) => item.idERP_Lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Lista", item);
            }}
          >
            <View style={styles.container}>
              <View>
                <Text>{item.idERP_Lista}</Text>
              </View>
              <View>
                <Avatar bg="yellow.500">{firstLetterUserName(item)}</Avatar>
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

            <View alignItems={"center"}>
              <Divider bg="light.400" thickness={"1"} w={"90%"} />
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
