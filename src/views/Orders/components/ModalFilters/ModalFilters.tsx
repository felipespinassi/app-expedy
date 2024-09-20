import {
  View,
  Text,
  Modal,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Form, Input } from "tamagui";
import { X } from "@tamagui/lucide-icons";
import { FieldValues, UseFormReturn } from "react-hook-form";
import SelectStatusHub from "./components/SelectStatusHub/SelectStatusHub";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";

interface Props {
  setFilters: Dispatch<SetStateAction<{}>>;
  form: UseFormReturn<FieldValues, any, undefined>;
  filters: {};
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalFilters({
  openModal,
  setFilters,
  form,
  filters,
  setOpenModal,
}: Props) {
  function onFinish() {
    const values = form.getValues();
    setFilters({ page: 1, ...values });

    setOpenModal(false);
  }
  return (
    <Modal
      presentationStyle="formSheet"
      animationType="slide"
      visible={openModal}
    >
      <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "500" }}>
            Filtrar Pedidos
          </Text>
          <TouchableOpacity onPress={() => setOpenModal(false)}>
            <X size={26} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ padding: 10, gap: 20, paddingBottom: 60 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>ID HUB</Text>
            <Input
              onChangeText={(e) => form.setValue("id", e)}
              placeholder="Digite o ID HUB"
            />

            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              ID Marketplace
            </Text>

            <Input
              onChangeText={(e) => form.setValue("orderid", e)}
              placeholder="Digite o ID Marketplace"
            />

            <SelectIntegracoes filters={filters} form={form} />

            <SelectStatusHub filters={filters} form={form} />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 30,
            right: "1%",
            left: "1%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Button
              onPress={() => onFinish()}
              width={"90%"}
              fontSize={18}
              color={"white"}
              backgroundColor={"#1890ff"}
            >
              Filtrar
            </Button>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}
