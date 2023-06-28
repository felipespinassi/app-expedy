import { View, Text } from "react-native";
import React from "react";
import { Heading, Box } from "native-base";

export default function DataProductsSold({ pedido }: any) {
  return (
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
                  Descrição:
                </Heading>
                {element.ProductsSold.original_name}
              </Text>
            </View>
          </Box>
        );
      })}
    </View>
  );
}
