import React, { useState } from "react";
import { Text, View } from "tamagui";
import fetcher from "../../../../../../../../services/fetcher";
import { config } from "../../../../../../../../services/apiConfig";
import { TouchableOpacity } from "react-native";
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
    `${config.baseURL}orders/file/visual`,
    fetcher
  );

  const [productSelected, setProductSelected] = useState("");

  return (
    <>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>Mais Vendidos</Text>
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
