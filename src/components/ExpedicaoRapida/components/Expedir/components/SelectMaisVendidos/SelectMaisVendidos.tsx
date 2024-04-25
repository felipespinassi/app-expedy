import React, { useMemo, useState } from "react";
import { Accordion, Paragraph, RadioGroup, Square, Text, View } from "tamagui";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { ChevronDown } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import Checkbox from "../../../../../Checkbox/Checkbox";

export default function SelectMaisVendidos({ form }: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Visual",
    async () => await fetcher(`${config.baseURL}orders/file/visual`, {})
  );

  const [productSelected, setProductSelected] = useState("");

  return (
    <>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>Mais Vendidos</Text>
      {data?.maisVendidos?.map((produto: any) => {
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
