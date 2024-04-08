import React, { useMemo, useState } from "react";

import { Accordion, Paragraph, RadioGroup, Square } from "tamagui";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { integracoesDisponiveis } from "../../../../../../Objects/integracoesDisponiveis";

export default function SelectMarkeplace({
  setValue,
}: {
  setValue: UseFormSetValue<FieldValues>;
}) {
  const [marketplaceSelected, setMarketplaceSelected] = useState("");
  return (
    <Accordion overflow="hidden" width="100%" type="multiple" gap={10}>
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row" justifyContent="space-between">
          {({ open }: { open: boolean }) => (
            <>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Marketplace{" "}
                {marketplaceSelected ? `- ${marketplaceSelected}` : <></>}
              </Text>

              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>

        <Accordion.Content backgroundColor={"$white3"} width={"100%"}>
          {/* <RadioGroup
            gap={15}
            onValueChange={(marketplace) =>
              setValue("marketplace", marketplace)
            }
          > */}
          {integracoesDisponiveis?.map((marketplace: any) => {
            return (
              <TouchableOpacity
                key={marketplace.key}
                onPress={() => {
                  setMarketplaceSelected(marketplace.label),
                    setValue("marketplace", marketplace.key);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    paddingRight: 25,
                  }}
                >
                  <Text>{marketplace.label}</Text>
                  {marketplaceSelected === marketplace.label ? (
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
