import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getService } from "../../../services/getService";
import { useQuery } from "react-query";
import { OrderSkelleton } from "../../../components/OrderSkelleton/OrderSkelleton";
import { Box, Button, Heading, ScrollView } from "native-base";

export function PedidoId({ route }: any) {
  const { data, isLoading, refetch, isFetching }: any = useQuery(
    "OrderComplete",
    async () => await getService(`front/orders/complete/${route.params}`, {})
  );
  const pedido = data?.data?.Order;

  if (isFetching) {
    return (
      <SafeAreaView>
        <OrderSkelleton />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
      }}
    >
      <Heading style={{ marginBottom: 20 }} fontWeight={500} size={"md"}>
        Pedido:
        {route.params}
      </Heading>

      <ScrollView showsVerticalScrollIndicator={false} width={"90%"}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Box
              width={"50%"}
              rounded="lg"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                Cliente
              </Heading>
              <Text>{pedido?.Customer.name}</Text>
            </Box>
            <Box
              rounded="lg"
              width={"50%"}
              height={150}
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                Pedido
              </Heading>
              <Text>{pedido?.id}</Text>
            </Box>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Box
              width={"50%"}
              rounded="lg"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                Status Hub
              </Heading>
              <Text>{pedido?.status_hub}</Text>
            </Box>
            <Box
              rounded="lg"
              width={"50%"}
              height={150}
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                Status MP
              </Heading>
              <Text>{pedido?.status}</Text>
            </Box>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Box
              width={"50%"}
              rounded="lg"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                ID MP
              </Heading>
              <Text>{pedido?.orderid}</Text>
            </Box>
            <Box
              rounded="lg"
              width={"50%"}
              height={150}
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
              px={3}
              py={1}
              style={{ marginBottom: 5 }}
            >
              <Heading fontWeight={500} size={"md"}>
                Total do pedido
              </Heading>
              <Text>{pedido?.total}</Text>
            </Box>
          </View>

          {pedido?.Customer.CustomerAddresses.map((element: any) => {
            console.log(element.CustomerAddress);
            return (
              <View key={element}>
                <View style={{ flexDirection: "row" }}>
                  <Box
                    width={"50%"}
                    rounded="lg"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                    px={3}
                    py={1}
                    style={{ marginBottom: 5 }}
                  >
                    <Heading fontWeight={500} size={"md"}>
                      Loja
                    </Heading>
                    <Text>{pedido?.integracao.name}</Text>
                  </Box>
                  <Box
                    rounded="lg"
                    width={"50%"}
                    height={150}
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                    px={3}
                    py={1}
                    style={{ marginBottom: 5 }}
                  >
                    <Heading fontWeight={500} size={"md"}>
                      Endereço/N°
                    </Heading>
                    <Text>
                      {element.CustomerAddress.address}/
                      {element.CustomerAddress.number}/
                      {element.CustomerAddress.neighborhood}
                    </Text>
                  </Box>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Box
                    width={"50%"}
                    height={150}
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                    px={3}
                    py={1}
                    style={{ marginBottom: 5 }}
                  >
                    <Heading fontWeight={500} size={"md"}>
                      Cidade/Estado
                    </Heading>
                    <Text>
                      {element.CustomerAddress.city}/
                      {element.CustomerAddress.state}
                    </Text>
                  </Box>
                  <Box
                    width={"50%"}
                    height={150}
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                    px={3}
                    py={1}
                    style={{ marginBottom: 5 }}
                  >
                    <Heading fontWeight={500} size={"md"}>
                      CEP
                    </Heading>
                    <Text>{element.CustomerAddress.zip_code}</Text>
                  </Box>
                </View>
              </View>
            );
          })}
          <View style={{ marginVertical: 20 }}>
            <Button>Atualizar informações</Button>
          </View>

          <View style={{ marginTop: 30 }}>
            <Heading style={{ marginBottom: 20 }} fontWeight={500} size={"md"}>
              Produtos vendidos
            </Heading>
            {pedido?.ProductsSold.map((element: any) => {
              const key = element.ProductsSold.product_id;
              return (
                <Box
                  key={key}
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                  px={3}
                  py={1}
                  style={{ marginBottom: 10 }}
                >
                  <View>
                    <Text>
                      <Heading
                        style={{ marginBottom: 20 }}
                        fontWeight={500}
                        size={"sm"}
                      >
                        SKU:
                      </Heading>
                      {element.ProductsSold.reference}
                    </Text>
                    <Text>
                      <Heading
                        style={{ marginBottom: 20 }}
                        fontWeight={500}
                        size={"sm"}
                      >
                        ID:
                      </Heading>
                      {element.ProductsSold.product_id}
                    </Text>
                    <Text>
                      <Heading
                        style={{ marginBottom: 20 }}
                        fontWeight={500}
                        size={"sm"}
                      >
                        Descrição:
                      </Heading>
                      {element.ProductsSold.original_name}
                    </Text>
                  </View>
                </Box>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
