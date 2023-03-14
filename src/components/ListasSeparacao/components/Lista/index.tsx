import { Center, FlatList, Text, View, VStack } from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getService } from "../../../../../services/getService";
import { ListSkelleton } from "../../../ListSkelleton";

export default function Lista({ navigation }: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const listaSelecionada = navigation.route.params.idERP_Lista;
    setLoading(true);
    const response: any = await getService(
      `expedicao/lista/separacao/${listaSelecionada}/pedido`,
      {}
    );
    setData(response.data.lista);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView
      style={{ paddingTop: 10, marginHorizontal: 10, paddingBottom: 25 }}
    >
      {!loading ? (
        <>
          <Text style={{ marginBottom: 5 }}>
            Lista numero: {navigation.route.params.idERP_Lista}
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item: any) => item.product_id}
            renderItem={({ item }) => (
              <VStack style={{ marginVertical: 5 }}>
                <Center padding={2} bg={"light.200"} w="100%" rounded="md">
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      maxWidth: "100%",
                    }}
                  >
                    <View style={{ width: "20%", marginRight: 15 }}>
                      <Text style={{ fontSize: 12 }}>{item.reference}</Text>
                    </View>
                    <View style={{ width: "60%", marginRight: 10 }}>
                      <Text style={{ fontSize: 12 }}>{item.original_name}</Text>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>{item.quantity}</Text>
                    </View>
                  </View>
                </Center>
              </VStack>
            )}
          />
        </>
      ) : (
        <ListSkelleton />
      )}
    </SafeAreaView>
  );
}
