import React, { useState } from "react";
import fetcher from "../../../../../../../../services/fetcher";
import { config } from "../../../../../../../../services/apiConfig";
import { Text, TouchableOpacity } from "react-native";
import useSWR from "swr";
import { UseFormReturn } from "react-hook-form";
import { FiltersProps } from "../../../../../../@types/FiltersExpedirTypes";
import { OrdersResponseTypes } from "../../../../../../@types/OrdersResponseTypes";
import Checkbox from "../../../../../../../../components/Checkbox/Checkbox";
import { Spinner, View } from "tamagui";

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
    return <Spinner size="large" />;
  }

  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Mais Vendidos</Text>
      {data?.maisVendidos?.map((produto) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setProductSelected(produto.sku),
                form.setValue("produto", produto.id_produto);
            }}
            key={produto.id_produto}
          >
            <View
              flexDirection="row"
              justifyContent="space-between"
              paddingRight={25}
            >
              <Text>{produto.sku}</Text>
              <Checkbox value1={productSelected} value2={produto.sku} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
