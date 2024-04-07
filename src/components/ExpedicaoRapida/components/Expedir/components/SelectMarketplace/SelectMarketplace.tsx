import React, { useMemo, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import {
  Accordion,
  Adapt,
  Paragraph,
  RadioGroup,
  Select,
  Sheet,
  Square,
  Text,
  View,
} from "tamagui";
import { integracoesDisponiveis } from "../../../../../../objects/integracoesDisponiveis";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";

export default function SelectMarkeplace({
  setValue,
}: {
  setValue: UseFormSetValue<FieldValues>;
}) {
  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Paragraph>Marketplaces</Paragraph>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          <RadioGroup
            gap={15}
            onValueChange={(marketplace) =>
              setValue("marketplace", marketplace)
            }
          >
            {integracoesDisponiveis?.map((marketplace: any) => {
              return (
                <View
                  key={marketplace.key}
                  flexDirection="row"
                  justifyContent="space-between"
                  padding={10}
                  paddingRight={25}
                >
                  <Text>{marketplace.label}</Text>
                  <RadioGroup.Item
                    size={"$5"}
                    backgroundColor={"white"}
                    value={marketplace.key}
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
