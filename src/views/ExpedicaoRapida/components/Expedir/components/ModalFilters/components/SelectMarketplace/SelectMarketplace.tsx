import React, { useMemo, useState } from "react";

import { Accordion, Paragraph, RadioGroup, Square } from "tamagui";
import { FieldValues, UseFormReturn, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { integracoesDisponiveis } from "../../../../../../../../objects/integracoesDisponiveis";
import { FiltersProps } from "../../../../../../@types/FiltersExpedirTypes";
import Checkbox from "../../../../../../../../components/Checkbox/Checkbox";

export default function SelectMarkeplace({
  form,
}: {
  form: UseFormReturn<FiltersProps>;
}) {
  const [marketplaceSelected, setMarketplaceSelected] = useState("");
  return (
    <>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>Marketplace</Text>
      {integracoesDisponiveis?.map((marketplace) => {
        return (
          <TouchableOpacity
            key={marketplace.key}
            onPress={() => {
              setMarketplaceSelected(marketplace.label),
                form.setValue("marketplace", marketplace.key);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 25,
              }}
            >
              <Text>{marketplace.label}</Text>
              <Checkbox
                value1={marketplaceSelected}
                value2={marketplace.label}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
