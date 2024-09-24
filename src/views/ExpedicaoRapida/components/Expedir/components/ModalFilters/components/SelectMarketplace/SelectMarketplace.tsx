import React, { useState } from "react";

import { UseFormReturn } from "react-hook-form";
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
      <Text
        className="text-foreground dark:text-darkForeground"
        style={{ fontSize: 18, fontWeight: "500" }}
      >
        Marketplace
      </Text>
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
              <Text className="text-foreground dark:text-darkForeground">
                {marketplace.label}
              </Text>
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
