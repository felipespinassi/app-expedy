import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { X } from "@tamagui/lucide-icons";
import { Button, Form, Input } from "tamagui";
import SelectMaisVendidos from "../SelectMaisVendidos/SelectMaisVendidos";
import { useForm } from "react-hook-form";
import SelectMarkeplace from "../SelectMarketplace/SelectMarketplace";
import SelectIntegracoes from "../SelectIntegracoes/SelectIntegracoes";

export default function ModalFilters({
  openModal,
  setOpenModal,
  setFilters,
  filters,
  form,
}: any) {
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
        <TouchableOpacity
          onPress={() => setOpenModal(false)}
          style={{ alignItems: "flex-end", padding: 10 }}
        >
          <X />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Button
              onPress={() => {
                onFinish(), setOpenModal(false);
              }}
              width={"80%"}
              color={"white"}
              backgroundColor={"#1890ff"}
            >
              Filtrar
            </Button>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <Form onSubmit={() => {}} gap={20} padding={20}>
            <View style={{ gap: 15, marginBottom: 10 }}>
              <SelectIntegracoes form={form} filters={filters} />
            </View>
            <View style={{ gap: 15, marginBottom: 10 }}>
              <SelectMarkeplace form={form} />
            </View>

            <View style={{ gap: 15, marginBottom: 10 }}>
              <SelectMaisVendidos form={form} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Input
                placeholderTextColor={"black"}
                placeholder=" SKU"
                onChangeText={(e) => form.setValue("unico_sku", e)}
                width={"100%"}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Input
                placeholderTextColor={"black"}
                placeholder=" Marketplace"
                onChangeText={(e) => form.setValue("orderid", e)}
                width={"100%"}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Input
                placeholderTextColor={"black"}
                placeholder=" ID Hub"
                onChangeText={(e) => form.setValue("id", e)}
                width={"100%"}
              />
            </View>
            {/* <View style={{ flexDirection: "row", gap: 10 }}>
            <DatePicker setValue={setValue} />
          </View> */}
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}
