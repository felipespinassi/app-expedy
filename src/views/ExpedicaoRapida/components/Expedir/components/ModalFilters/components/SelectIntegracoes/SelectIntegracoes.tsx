import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import fetcher from "../../../../../../../../services/fetcher";
import { config } from "../../../../../../../../services/apiConfig";
import { FiltersProps } from "../../../../../../@types/FiltersExpedirTypes";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";
import Checkbox from "../../../../../../../../components/Checkbox/Checkbox";

interface Props {
  form: UseFormReturn<FiltersProps>;
  filters: FiltersProps;
}

interface IntegrationProps {
  integracoes: [
    {
      descricao: string;
      id: string;
    }
  ];
}

export default function SelectIntegracoes({ form, filters }: Props) {
  const { data, isLoading } = useSWR<IntegrationProps>(
    `${config.baseURL}front/integracoes`,
    fetcher
  );

  const [value, setValue] = useState(filters?.integracao);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <Text
        className="text-foreground dark:text-darkForeground"
        style={{ fontSize: 18, fontWeight: "500" }}
      >
        Integrações
      </Text>
      <View
        style={{ padding: 10, gap: 20, paddingBottom: 30 }}
        className="bg-muted dark:bg-darkMuted rounded-md"
      >
        {data?.integracoes.map((integracao: any) => {
          return (
            <TouchableOpacity
              key={integracao.descricao}
              onPress={() => {
                form.setValue("integracao", integracao.id);
                setValue(integracao.id);
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
                  {integracao.descricao}
                </Text>
                <Checkbox value1={value} value2={integracao.id} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
