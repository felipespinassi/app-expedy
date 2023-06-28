import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  useColorMode,
  useColorModeValue,
} from "native-base";

export default function DataCustomer({ pedido }: any) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Box
          width={"50%"}
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
        >
          <Heading fontWeight={500} size={"md"}>
            Cliente
          </Heading>
          <Text>{pedido?.Customer.name}</Text>
        </Box>
        <Box
          rounded="lg"
          width={"50%"}
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
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
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
        >
          <Heading fontWeight={500} size={"md"}>
            Status Hub
          </Heading>
          <Text>{pedido?.status_hub}</Text>
        </Box>
        <Box
          rounded="lg"
          width={"50%"}
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
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
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
        >
          <Heading fontWeight={500} size={"md"}>
            ID MP
          </Heading>
          <Text>{pedido?.orderid}</Text>
        </Box>
        <Box
          rounded="lg"
          width={"50%"}
          height={100}
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
          style={{ marginBottom: 1, justifyContent: "space-around" }}
        >
          <Heading fontWeight={500} size={"md"}>
            Total do pedido
          </Heading>
          <Text>{pedido?.total}</Text>
        </Box>
      </View>
      {pedido?.Customer.CustomerAddresses.map((element: any) => {
        return (
          <View key={element}>
            <View style={{ flexDirection: "row" }}>
              <Box
                width={"50%"}
                height={100}
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
                style={{ marginBottom: 1, justifyContent: "space-around" }}
              >
                <Heading fontWeight={500} size={"md"}>
                  Loja
                </Heading>
                <Text>{pedido?.integracao.name}</Text>
              </Box>
              <Box
                rounded="lg"
                width={"50%"}
                height={100}
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
                style={{ marginBottom: 1, justifyContent: "space-around" }}
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
                height={100}
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
                style={{ marginBottom: 1, justifyContent: "space-around" }}
              >
                <Heading fontWeight={500} size={"md"}>
                  Cidade/Estado
                </Heading>
                <Text>
                  {element.CustomerAddress.city}/{element.CustomerAddress.state}
                </Text>
              </Box>
              <Box
                width={"50%"}
                height={100}
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
                style={{ marginBottom: 1, justifyContent: "space-around" }}
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
    </View>
  );
}
