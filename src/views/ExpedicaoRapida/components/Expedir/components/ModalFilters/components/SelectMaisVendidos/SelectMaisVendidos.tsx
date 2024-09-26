import React, { useState } from "react";
import fetcher from "../../../../../../../../services/fetcher";
import { config } from "../../../../../../../../services/apiConfig";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import useSWR from "swr";
import { UseFormReturn } from "react-hook-form";
import { FiltersProps } from "../../../../../../@types/FiltersExpedirTypes";
import { OrdersResponseTypes } from "../../../../../../@types/OrdersResponseTypes";
import Checkbox from "../../../../../../../../components/Checkbox/Checkbox";

export default function SelectMaisVendidos({
  form,
}: {
  form: UseFormReturn<FiltersProps>;
}) {
  const { data, isLoading } = useSWR<OrdersResponseTypes>(
    `${config.baseURL}orders/maisVendidos`,
    fetcher
  );

  const [productSelected, setProductSelected] = useState("");

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text
        className="text-foreground dark:text-darkForeground"
        style={{ fontSize: 18, fontWeight: "500" }}
      >
        Mais Vendidos
      </Text>
      <View
        style={{ padding: 10, gap: 20, paddingBottom: 30 }}
        className="bg-muted dark:bg-darkMuted rounded-md"
      >
        {data?.maisVendidos?.map((produto) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setProductSelected(produto.sku),
                  form.setValue("produto", produto.id_produto);
              }}
              key={produto.id_produto}
            >
              <View className="flex-row justify-between pr-6">
                <Text className="text-foreground dark:text-darkForeground">
                  {produto.sku}
                </Text>
                <Checkbox value1={productSelected} value2={produto.sku} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
