import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { UseQueryResult, useQuery } from "react-query";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";

export default function SelectIntegracoes({ form, filters }: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );

  const [value, setValue] = useState(filters.fkintegracao);

  if (isFetching) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Integrações</Text>
      {data?.integracoes.map((integracao: any) => {
        return (
          <TouchableOpacity
            key={integracao.descricao}
            onPress={() => {
              form.setValue("fkintegracao", integracao.id);
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
