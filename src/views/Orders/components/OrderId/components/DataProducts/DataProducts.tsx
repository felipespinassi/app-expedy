import { View, Text } from "react-native";
import React from "react";

export default function DataProducts({ pedido }: any) {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 20 }}>Itens do Pedido</Text>
      {pedido?.ProductsSold.map((element: any) => {
        const key = element.ProductsSold.product_id;
        return (
          <View
            key={key}
            style={{
              gap: 5,
              marginBottom: 10,
              backgroundColor: "white",
              padding: 20,

              borderRadius: 10,
            }}
          >
            <Text>
              <Text style={{ color: "gray", fontSize: 16 }}>SKU:</Text>
              {element.ProductsSold.reference}
            </Text>

            <Text>
              <Text style={{ color: "gray", fontSize: 16 }}>Descrição:</Text>
              {element.ProductsSold.original_name}
            </Text>
            <Text>
              <Text style={{ color: "gray", fontSize: 16 }}>Quantidade:</Text>
              {element.ProductsSold.quantity}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
