import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../../../services/fetcher";
import { config } from "../../../../../../../../services/apiConfig";
import Checkbox from "../../../../../../../Checkbox/Checkbox";
import { FiltersProps } from "../../../../../../@types/FiltersExpedirTypes";
import { UseFormReturn } from "react-hook-form";
import useSWR from "swr";

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
  return (
    <>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>Integrações</Text>
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
              <Text>{integracao.descricao}</Text>
              <Checkbox value1={value} value2={integracao.id} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
