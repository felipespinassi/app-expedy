import { Button, Spinner } from "tamagui";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList, Text, View } from "react-native";
import moment from "moment";
import { useState } from "react";
import { marketplaces } from "../../../Orders/utils/marketplaces";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import { useGetVisual } from "./hooks/useGetVisual";
import ListEmptyComponent from "../../../ListEmptyComponent/ListEmptyComponent";
import { useForm } from "react-hook-form";

export default function Expedir() {
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState<any>({});
  const form = useForm();

  console.log(filters);
  const { data, isLoading, mutate, error } = useGetVisual(filters);

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
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingRight: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setFilters({}), form.reset();
          }}
        >
          <Text>Limpar Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Text>Filtros</Text>
        </TouchableOpacity>
      </View>

      <Button
        disabled={true}
        color={"white"}
        variant="outlined"
        backgroundColor={"#1890ff"}
      >
        Gerar Arquivo
      </Button>
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
          ListEmptyComponent={<ListEmptyComponent />}
        />
      )}

      <ModalFilters
        setFilters={setFilters}
        openModal={openModal}
        setOpenModal={setOpenModal}
        filters={filters}
        form={form}
      />
    </View>
  );
}
