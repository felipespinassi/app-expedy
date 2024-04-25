import { Button, Form, Input, Label, Separator, Spinner } from "tamagui";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";
import { useForm } from "react-hook-form";
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";
import { UseQueryResult, useQuery } from "react-query";
import moment from "moment";
import { useState } from "react";
import { marketplaces } from "../../../Orders/utils/marketplaces";
import { X } from "@tamagui/lucide-icons";
import ModalFilters from "./components/ModalFilters/ModalFilters";

export default function Expedir() {
  const [openModal, setOpenModal] = useState(false);

  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Visual",
    async () =>
      await fetcher(`${config.baseURL}orders/file/visual?pageSize=100`, {})
  );

  // async function onGerarArquivo() {
  //   const values = getValues();
  //   const params = new URLSearchParams();
  //   Object.keys(values).map((key) => {
  //     const value = values[key];
  //     params.append(key, value);
  //   });

  //   if (Object.keys(values).length <= 0) {
  //     return Alert.alert("Selecione um filtro para gerar o arquivo");
  //   }
  //   try {
  //     const response = await fetcher(
  //       `${
  //         config.baseURL
  //       }orders/file/create?usuario=Expedy&${params.toString()}`,
  //       { method: "POST" }
  //     );
  //     return Alert.alert("Arquivo gerado");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          width: "100%",
          height: 40,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          shadowColor: "black",
          shadowRadius: 2,
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 0 },
        }}
      >
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Text>Filtros</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View>
          <Spinner size="large" />
        </View>
      ) : (
        <FlatList
          style={{ padding: 5 }}
          data={data?.orders}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                marginBottom: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
                height: 90,
              }}
            >
              <View
                style={{
                  backgroundColor: marketplaces[item.integracao.tipo]?.color,
                  width: 5,
                  height: "100%",
                  borderRadius: 10,
                }}
              />
              <View style={{ gap: 5, width: "60%" }}>
                <Text>{item.cliente}</Text>
                <Text>{item.integracao.name}</Text>
                <Text>{item.orderid}</Text>
              </View>

              <View style={{ width: "30%" }}>
                <Text>
                  <Text>
                    {moment(item.dataCriacao).utc(true).format("DD/MM")}-
                    {moment(item.dataCriacao).utc(true).format("HH:mm")}
                  </Text>
                </Text>
              </View>
            </View>
          )}
        />
      )}

      <ModalFilters openModal={openModal} setOpenModal={setOpenModal} />
    </View>
  );
}
