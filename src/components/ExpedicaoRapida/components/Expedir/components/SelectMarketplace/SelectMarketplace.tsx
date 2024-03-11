import React, { useMemo, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import { getService } from "../../../../../../services/getService";
import { Adapt, Select, Sheet } from "tamagui";
import { integracoesDisponiveis } from "../../../../../../Objects/integracoesDisponiveis";

export default function SelectMarkeplace(props: any) {
  return (
    <Select
      //   value={props.integracaoId}
      //   onValueChange={props.setIntegracaoId}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={220}>
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
            <Select.Label>Marketplace</Select.Label>

            {useMemo(
              () =>
                integracoesDisponiveis?.map((item: any, i: any) => {
                  console.log(item);
                  return (
                    <Select.Item index={i} key={item.key} value={item?.key}>
                      <Select.ItemText>{item?.label}</Select.ItemText>
                    </Select.Item>
                  );
                }),

              [integracoesDisponiveis]
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}
