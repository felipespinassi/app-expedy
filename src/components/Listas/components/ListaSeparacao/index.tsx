import { Center, FlatList, Text, View, VStack } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListaProps } from "../../../../@types/ListaProps";
import { getService } from "../../../../services/getService";
import { ListSkelleton } from "../../../ListSkelleton";

export default function ListaSeparacao({ navigation, route }: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const listaSelecionada = route.params.idERP_Lista;
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
      <Text style={{ marginBottom: 5 }}>
        Lista numero: {route.params.idERP_Lista}
      </Text>
      {!loading ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item: ListaProps) => item.product_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Produtos", item)}
              >
                <VStack style={{ marginVertical: 5 }}>
                  <Center padding={3} bg={"light.200"} w="100%" rounded="md">
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        maxWidth: "100%",
                      }}
                    >
                      <View style={{ width: "20%", alignItems: "center" }}>
                        <Text style={{ fontSize: 16 }}>{item.quantity}</Text>
                      </View>
                      <View style={{ width: "80%" }}>
                        <Text style={{ fontSize: 12, marginBottom: 10 }}>
                          SKU: {item.reference}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          {item.original_name}
                        </Text>
                      </View>
                    </View>
                  </Center>
                </VStack>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <ListSkelleton />
      )}
    </SafeAreaView>
  );
}
