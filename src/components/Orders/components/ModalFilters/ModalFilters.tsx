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
import SelectIntegracores from "../DialogFilters/components/SelectIntegracoes/SelectIntegracores";
import SelectStatusHub from "../DialogFilters/components/SelectStatusHub/SelectStatusHub";
import { X } from "@tamagui/lucide-icons";
import { FieldValues, UseFormReturn } from "react-hook-form";

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
        <TouchableOpacity
          onPress={() => setOpenModal(false)}
          style={{
            alignItems: "flex-end",
            paddingRight: 20,
            paddingBottom: 20,
          }}
        >
          <X size={26} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Button
            onPress={() => onFinish()}
            theme={"blue_active"}
            backgroundColor={"#1890ff"}
            color={"white"}
            width={"80%"}
          >
            Filtrar
          </Button>
        </View>

        <ScrollView>
          <View style={{ padding: 10, gap: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>ID HUB</Text>
            <Input
              onChangeText={(e) => form.setValue("id", e)}
              placeholder="Digite o ID HUB"
            />

            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              ID Marketplace
            </Text>

            <Input
              onChangeText={(e) => form.setValue("orderid", e)}
              placeholder="Digite o ID Marketplace"
            />

            <SelectIntegracores filters={filters} form={form} />

            <SelectStatusHub filters={filters} form={form} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
