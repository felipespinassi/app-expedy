import axios, { AxiosResponse } from "axios";
import { Divider, FlatList, Text, View } from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAccess_token } from "../../../storage/getAccess_token";

export function Lista(item: any) {
  const [data, setData] = useState([]);
  async function fetchData() {
    const access_token = await getAccess_token();
    const response: AxiosResponse = await axios.get(
      `https://api.expedy.com.br/expedicao/lista/separacao/${item.route.params.idERP_Lista}/pedido`,
      {
        params: {
          access_token: access_token,
        },
      }
    );
    setData(response.data.lista);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <SafeAreaView>
      <Text>Lista numero: {item.route.params.idERP_Lista}</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.product_id}
        renderItem={({ item }) => (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: 12 }}>{item.original_name}</Text>
              </View>
              <View>
                <Text>{item.quantity}</Text>
              </View>
            </View>
            <View alignItems={"center"}>
              <Divider bg="light.400" thickness={"1"} w={"90%"} />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
