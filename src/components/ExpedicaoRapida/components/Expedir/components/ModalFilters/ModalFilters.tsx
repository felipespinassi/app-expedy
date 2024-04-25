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
import SelectIntegracoes from "../../../../../Orders/components/ModalFilters/components/SelectIntegracoes/SelectIntegracoes";

export default function ModalFilters({ openModal, setOpenModal }: any) {
  const form = useForm();

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
        <ScrollView>
          <Form onSubmit={() => {}} gap={20} padding={20}>
            <View style={{ gap: 15 }}>
              <SelectIntegracoes form={form} filters={""} />
            </View>
            <View style={{ gap: 10 }}>
              <SelectMarkeplace form={form} />
            </View>

            <View style={{ flexDirection: "row" }}>
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

            <Form.Trigger asChild>
              <TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                  <Button
                    width={"100%"}
                    color={"white"}
                    backgroundColor={"#1890ff"}
                  >
                    GerarArquivo
                  </Button>
                </View>
              </TouchableOpacity>
            </Form.Trigger>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <View style={{ alignItems: "center" }}>
                <Button backgroundColor={"$white075"} width={"100%"}>
                  Limpar Filtros
                </Button>
              </View>
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}
