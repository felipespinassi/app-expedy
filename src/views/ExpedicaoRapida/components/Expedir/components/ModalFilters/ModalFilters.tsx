import {
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { X } from "@tamagui/lucide-icons";
import { Button, Form, Input } from "tamagui";
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { UseFormReturn } from "react-hook-form";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { FiltersProps } from "../../../../@types/FiltersExpedirTypes";
import DateTimePicker from "react-native-modal-datetime-picker";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setFilters: Dispatch<SetStateAction<FiltersProps>>;
  filters: FiltersProps;
  form: UseFormReturn<FiltersProps>;
}

export default function ModalFilters({
  openModal,
  setOpenModal,
  setFilters,
  filters,
  form,
}: Props) {
  async function onFinish() {
    const values = await form.getValues();

    setFilters(values);
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={openModal}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
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
            <X />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Form onSubmit={() => {}} gap={20} padding={20}>
            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                ID do Pedido na HUB
              </Text>
              <Input
                placeholderTextColor={"black"}
                placeholder=" ID Hub"
                onChangeText={(e) => form.setValue("id", e)}
                width={"100%"}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                ID do Pedido no Marketplace
              </Text>
              <Input
                placeholderTextColor={"black"}
                placeholder="ID Marketplace"
                onChangeText={(e) => form.setValue("orderid", e)}
                width={"100%"}
              />
            </View>

            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>SKU</Text>
              <Input
                placeholderTextColor={"black"}
                placeholder=" SKU"
                onChangeText={(e) => form.setValue("unico_sku", e)}
                width={"100%"}
              />
            </View>
            {/* <View style={{ flexDirection: "row", gap: 10 }}>
              <DatePicker setValue={setFilters} />
            </View> */}

            <View style={{ gap: 15, marginBottom: 10 }}>
              <SelectIntegracoes form={form} filters={filters} />
            </View>
            <View style={{ gap: 15, marginBottom: 10 }}>
              <SelectMarkeplace form={form} />
            </View>

            <View style={{ gap: 15, marginBottom: 80 }}>
              <SelectMaisVendidos form={form} />
            </View>
          </Form>
        </ScrollView>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 30,
            right: "5%",
            left: "5%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Button
              onPress={() => {
                onFinish(), setOpenModal(false);
              }}
              width={"90%"}
              fontSize={18}
              color={"white"}
              backgroundColor={"#1890ff"}
            >
              Filtrar
            </Button>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}
