import { Button, Spinner } from "tamagui";
import { FlatList, View } from "react-native";
import { useState } from "react";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import { useGetVisual } from "../../hooks/useGetVisual";
import ListEmptyComponent from "../../../ListEmptyComponent/ListEmptyComponent";
import { useForm } from "react-hook-form";
import { onGerarArquivo } from "../../utils/onGerarArquivo";
import ListOrders from "./components/ListOrders/ListOrders";
import TopBar from "./components/TopBar/TopBar";
import { FiltersProps } from "../../@types/FiltersExpedirTypes";

export default function Expedir() {
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState<FiltersProps>({} as FiltersProps);
  const form = useForm<FiltersProps>();

  const { data, isLoading, mutate, error } = useGetVisual(filters);

  function onResetFilters() {
    setFilters({} as FiltersProps), form.reset();
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar onResetFilters={onResetFilters} setOpenModal={setOpenModal} />
      <View
        style={{ justifyContent: "center", flexDirection: "row", margin: 5 }}
      >
        <Button
          onPress={() => onGerarArquivo(form, mutate)}
          width={"50%"}
          color={"white"}
          backgroundColor={"#1890ff"}
        >
          Gerar Arquivo
        </Button>
      </View>

      {isLoading ? (
        <View>
          <Spinner size="large" />
        </View>
      ) : (
        <FlatList
          style={{ padding: 5 }}
          data={data?.orders}
          renderItem={({ item }) => <ListOrders item={item} />}
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
