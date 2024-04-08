import React, { useMemo, useState } from "react";
import { Accordion, Paragraph, RadioGroup, Square, Text, View } from "tamagui";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { ChevronDown } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";

export default function SelectMaisVendidos({ setValue }: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Visual",
    async () => await fetcher(`${config.baseURL}orders/file/visual`, {})
  );

  const [productSelected, setProductSelected] = useState("");

  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Produtos Mais Vendidos{" "}
                {productSelected ? `- ${productSelected}` : <></>}
              </Text>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          {data?.maisVendidos?.map((produto: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setProductSelected(produto.sku),
                    setValue("produto", produto.id_produto);
                }}
                key={produto.id_produto}
              >
                <View
                  flexDirection="row"
                  justifyContent="space-between"
                  padding={10}
                  paddingRight={25}
                >
                  <Text>{produto.sku}</Text>
                  {productSelected === produto.sku ? (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#1890ff",
                        borderRadius: 5,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 5,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
