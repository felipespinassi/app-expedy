import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import { getService } from "../../../../../../services/getService";
import { Adapt, Select, Sheet, Spinner } from "tamagui";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";

export default function SelectIntegracoes(props: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );
  return (
    <Select
      onValueChange={(e) => props.setValue("integracaoId", e)}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={"60%"}>
        <Select.Value placeholder="Selecione a integração" />
      </Select.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.Viewport minWidth={200}>
          <Select.Group>
            <Select.Label>Integração</Select.Label>

            {useMemo(
              () =>
                data?.integracoes.map((item: any, i: any) => {
                  return (
                    <Select.Item index={i} key={item.id} value={item?.id}>
                      <Select.ItemText>{item?.descricao}</Select.ItemText>
                    </Select.Item>
                  );
                }),

              [data?.integracoes]
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}
