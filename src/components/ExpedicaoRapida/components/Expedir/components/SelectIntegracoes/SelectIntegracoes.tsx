import React, { useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import { Accordion, Square } from "tamagui";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function SelectIntegracoes({
  setValue,
}: {
  setValue: UseFormSetValue<FieldValues>;
}) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );
  const [integrationSelected, setIntegrationSelected] = useState("");
  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Integração{" "}
                {integrationSelected ? `- ${integrationSelected}` : <></>}
              </Text>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          {data?.integracoes.map((integracao: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIntegrationSelected(integracao.descricao),
                    setValue("integracaoId", integracao.id);
                }}
                key={integracao.descricao}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15,
                    paddingRight: 25,
                  }}
                >
                  <Text>{integracao.descricao}</Text>
                  {integrationSelected === integracao.descricao ? (
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
          {/* </RadioGroup> */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
