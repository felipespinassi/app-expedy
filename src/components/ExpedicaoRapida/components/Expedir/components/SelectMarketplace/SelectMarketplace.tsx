import React, { useMemo, useState } from "react";

import { Accordion, Paragraph, RadioGroup, Square } from "tamagui";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { integracoesDisponiveis } from "../../../../../../Objects/integracoesDisponiveis";
import Checkbox from "../../../../../Checkbox/Checkbox";

export default function SelectMarkeplace({ form }: { form: any }) {
  const [marketplaceSelected, setMarketplaceSelected] = useState("");
  return (
    <>
      {integracoesDisponiveis?.map((marketplace: any) => {
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
