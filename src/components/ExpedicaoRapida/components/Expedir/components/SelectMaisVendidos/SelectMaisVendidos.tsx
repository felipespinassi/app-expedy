import React, { useMemo } from "react";
import { Accordion, Paragraph, RadioGroup, Square, Text, View } from "tamagui";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { ChevronDown } from "@tamagui/lucide-icons";

export default function SelectMaisVendidos({ setValue }: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Visual",
    async () => await fetcher(`${config.baseURL}orders/file/visual`, {})
  );

  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Paragraph>Produtos Mais Vendidos</Paragraph>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          <RadioGroup
            gap={15}
            onValueChange={(produto) => {
              setValue("produto", produto);
            }}
          >
            {data?.maisVendidos?.map((produto: any) => {
              return (
                <View
                  key={produto.key}
                  flexDirection="row"
                  justifyContent="space-between"
                  padding={10}
                  paddingRight={25}
                >
                  <Text>{produto.sku}</Text>
                  <RadioGroup.Item
                    size={"$5"}
                    backgroundColor={"white"}
                    value={produto.id_produto}
                  >
                    <RadioGroup.Indicator backgroundColor={"#1890ff"} />
                  </RadioGroup.Item>
                </View>
              );
            })}
          </RadioGroup>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
