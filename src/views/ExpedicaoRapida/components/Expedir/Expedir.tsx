import { Button, Spinner } from "tamagui";
import {
  FlatList,
  Pressable,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import ModalFilters from "./components/ModalFilters/ModalFilters";
import { useGetVisual } from "../../hooks/useGetVisual";
import { useForm } from "react-hook-form";
import { onGerarArquivo } from "../../utils/onGerarArquivo";
import ListOrders from "./components/ListOrders/ListOrders";
import TopBar from "./components/TopBar/TopBar";
import { FiltersProps } from "../../@types/FiltersExpedirTypes";
import ListEmptyComponent from "../../../../components/ListEmptyComponent/ListEmptyComponent";
import { Plus } from "@tamagui/lucide-icons";

export default function Expedir() {
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState<FiltersProps>({} as FiltersProps);
  const form = useForm<FiltersProps>();

  const { data, isLoading, mutate, error } = useGetVisual(filters);

  const isFiltered = Object.keys(filters).length > 0;
  function onResetFilters() {
    setFilters({} as FiltersProps), form.reset();
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar onResetFilters={onResetFilters} />

      <TouchableOpacity
        onPress={() =>
          Object.keys(filters).length > 0
            ? onGerarArquivo(form, mutate)
            : setOpenModal(true)
        }
        style={{
          backgroundColor: "#1890ff",
          height: 70,
          width: isFiltered ? 150 : 70,
          borderRadius: isFiltered ? 20 : 50,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "80%",
          zIndex: 100,
          right: "10%",
        }}
      >
        {isFiltered ? (
          <Text style={{ color: "white" }}>Gerar Arquivo</Text>
        ) : (
          <Plus color={"white"} />
        )}
      </TouchableOpacity>

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
