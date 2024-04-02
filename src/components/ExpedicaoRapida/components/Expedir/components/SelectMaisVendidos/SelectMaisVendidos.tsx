import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { Adapt, Select, Sheet } from "tamagui";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";

export default function SelectMaisVendidos(props: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Visual",
    async () => await fetcher(`${config.baseURL}orders/file/visual`, {})
  );

  return (
    <Select
      //   value={props.integracaoId}
      onValueChange={(e) => props.setValue("produto", e)}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={220}>
        <Select.Value placeholder="Selecione a integração" />
      </Select.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet
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
            <Select.Label>Produtos Mais vendidos</Select.Label>

            {useMemo(
              () =>
                data?.maisVendidos?.map((item: any, i: any) => {
                  console.log(item);
                  return (
                    <Select.Item index={i} key={i} value={item?.id_produto}>
                      <Select.ItemText>{item?.sku}</Select.ItemText>
                    </Select.Item>
                  );
                }),

              [data?.maisVendidos]
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}
