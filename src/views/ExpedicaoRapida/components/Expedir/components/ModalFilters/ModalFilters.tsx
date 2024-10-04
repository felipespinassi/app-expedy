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
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { UseFormReturn } from "react-hook-form";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { FiltersProps } from "../../../../@types/FiltersExpedirTypes";

import { Input } from "../../../../../../../components/Input";
import { Button } from "../../../../../../../components/Button";
import { X } from "lucide-react-native";

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
          className="bg-background dark:bg-darkBackground"
        >
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 22, fontWeight: "500" }}
          >
            Filtrar Pedidos
          </Text>
          <TouchableOpacity onPress={() => setOpenModal(false)}>
            <X color="#3b82f6" size={22} />
          </TouchableOpacity>
        </View>

        <ScrollView className=" bg-background dark:bg-darkBackground">
          <View className="gap-5 px-3 pb-32 py4">
            <View
              style={{ padding: 10, gap: 20, paddingBottom: 30 }}
              className="bg-muted dark:bg-darkMuted rounded-md"
            >
              <Text
                className="text-foreground dark:text-darkForeground"
                style={{ fontSize: 18, fontWeight: "500" }}
              >
                ID do Pedido na HUB
              </Text>
              <Input
                placeholder="Id Hub"
                onChangeText={(e) => form.setValue("id", e)}
              />

              <Text
                className="text-foreground dark:text-darkForeground"
                style={{ fontSize: 18, fontWeight: "500" }}
              >
                ID do Pedido no Marketplace
              </Text>
              <Input
                placeholder="ID Marketplace"
                onChangeText={(e) => form.setValue("orderid", e)}
              />

              <Text
                className="text-foreground dark:text-darkForeground"
                style={{ fontSize: 18, fontWeight: "500" }}
              >
                SKU
              </Text>
              <Input
                placeholder=" SKU"
                onChangeText={(e) => form.setValue("unico_sku", e)}
              />
            </View>

            <SelectIntegracoes form={form} filters={filters} />

            <SelectMarkeplace form={form} />

            <SelectMaisVendidos form={form} />
          </View>
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
              className="w-full  "
              size={"lg"}
            >
              Filtrar
            </Button>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}
