import React, { useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import { Accordion, Paragraph, RadioGroup, Square, Text, View } from "tamagui";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";

export default function SelectIntegracoes({
  setValue,
}: {
  setValue: UseFormSetValue<FieldValues>;
}) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );

  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Paragraph>Integrações</Paragraph>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          <RadioGroup
            gap={15}
            onValueChange={(integracaoId) =>
              setValue("integracaoId", integracaoId)
            }
          >
            {data?.integracoes.map((integracao: any) => {
              return (
                <View
                  key={integracao.descricao}
                  flexDirection="row"
                  justifyContent="space-between"
                  padding={10}
                  paddingRight={25}
                >
                  <Text>{integracao.descricao}</Text>
                  <RadioGroup.Item
                    size={"$5"}
                    backgroundColor={"white"}
                    value={integracao.id}
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
