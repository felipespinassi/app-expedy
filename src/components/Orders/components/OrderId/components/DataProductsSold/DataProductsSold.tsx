import React from "react";
import { Text, View } from "tamagui";

export default function DataProductsSold({ pedido }: any) {
  return (
    <View theme={"light"} marginTop={30}>
      <Text marginBottom={20}>Produtos vendidos</Text>
      {pedido?.ProductsSold.map((element: any) => {
        const key = element.ProductsSold.product_id;
        return (
          <View key={key} overflow="hidden">
            <View>
              <Text>
                <Text marginBottom={20}>SKU:</Text>
                {element.ProductsSold.reference}
              </Text>

              <Text>
                <Text marginBottom={20}>Descrição:</Text>
                {element.ProductsSold.original_name}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
