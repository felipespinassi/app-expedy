import {
  Box,
  Button,
  Center,
  CheckIcon,
  FlatList,
  HStack,
  Slide,
  Text,
  View,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListaProps } from "../../@types/ListaProps";
import { getService } from "../../services/getService";
import { ListSkelleton } from "../ListSkelleton";
import ArrowBack from "../ArrowBack/ArrowBack";

export default function ListaSeparacao({ navigation, route }: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <View style={{ justifyContent: "space-between" }}>
        <ArrowBack navigation={navigation} />

        <Text style={{ marginBottom: 5, textAlign: "center" }}>
          Lista numero: {route.params.idERP_Lista}
        </Text>
      </View>

      {!loading ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item: ListaProps) => item.product_id}
            renderItem={({ item }) => (
              <VStack style={{ marginVertical: 5 }} shadow={1}>
                <Center padding={3} bg={"light.50"} w="100%" rounded="md">
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
                      <Text style={{ fontSize: 12 }}>{item.original_name}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                    }}
                  >
                    <Button
                      onPress={() => setIsOpen(!isOpen)}
                      bg={"primary.900"}
                      size={"xs"}
                    >
                      Confirmar todos
                    </Button>
                    <Button
                      bg={"primary.900"}
                      onPress={() => navigation.navigate("Produtos", item)}
                      size={"xs"}
                    >
                      Alterar quantidade
                    </Button>
                  </View>
                </Center>

                <Slide duration={500} in={isOpen} placement="top">
                  <Box
                    w="100%"
                    position="absolute"
                    p="2"
                    borderRadius="xs"
                    bg="emerald.100"
                    alignItems="center"
                    justifyContent="center"
                    _dark={{
                      bg: "emerald.200",
                    }}
                    safeArea
                  >
                    <HStack space={2}>
                      <CheckIcon
                        size="4"
                        color="emerald.600"
                        mt="1"
                        _dark={{
                          color: "emerald.700",
                        }}
                      />
                    </HStack>
                  </Box>
                </Slide>
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
