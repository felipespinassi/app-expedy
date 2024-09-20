import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { X } from "@tamagui/lucide-icons";
import { Button, Input } from "tamagui";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { useToastController } from "@tamagui/toast";

export default function ModalUpdateInfo({
  pedido,
  setOpenModal,
  openModal,
  refetch,
}: any) {
  const toast = useToastController();
  const form = useForm({
    values: {
      name: pedido.Customer.name,
      state_inscription: pedido.Customer.state_inscription,
      cpf: pedido.Customer.cpf,
      cnpj: pedido.Customer.cnpj,
      CustomerAddresses: {
        address: pedido.Customer.CustomerAddresses[0].CustomerAddress.address,
        number: pedido.Customer.CustomerAddresses[0].CustomerAddress.number,
        neighborhood:
          pedido.Customer.CustomerAddresses[0].CustomerAddress.neighborhood,
        city: pedido.Customer.CustomerAddresses[0].CustomerAddress.city,
        state: pedido.Customer.CustomerAddresses[0].CustomerAddress.state,
        zip_code: pedido.Customer.CustomerAddresses[0].CustomerAddress.zip_code,
      },
    },
  });

  async function onUpdateCustomerInfo(values: any) {
    try {
      await fetcher(`${config.baseURL}orders/${pedido.id}/customer`, {
        method: "PUT",

        body: JSON.stringify(values),
      });
      setOpenModal(false);
      toast.show("Informações Atualizadas.");
      refetch();
    } catch (error) {
      Alert.alert("Não foi possível atualizar.");
    }
  }
  return (
    <Modal
      presentationStyle="formSheet"
      animationType="slide"
      visible={openModal}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              Atualizar Informações do cliente
            </Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <X size={26} color={"black"} />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ padding: 10 }}>
            <View style={{ gap: 15, paddingBottom: 100 }}>
              <Text>Cliente</Text>

              <Controller
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input
                    defaultValue={pedido?.name}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Cliente"
                  />
                )}
              />

              <Text>Inscrição Estadual</Text>
              <Controller
                control={form.control}
                name="state_inscription"
                render={({ field }) => (
                  <Input
                    defaultValue={pedido?.state_inscription}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="IE"
                  />
                )}
              />

              <Text>CPF</Text>
              <Controller
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <Input
                    defaultValue={pedido?.cpf}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="CPF"
                  />
                )}
              />

              <Text>CNPJ</Text>
              <Controller
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <Input
                    defaultValue={pedido?.cnpj}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="CNPJ"
                  />
                )}
              />

              <Text>Endereço</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.address"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress
                        .address
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="CNPJ"
                  />
                )}
              />

              <Text>Número</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.number"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress
                        .number
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Número"
                  />
                )}
              />

              <Text>Bairro</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.neighborhood"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress
                        .neighborhood
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Bairro"
                  />
                )}
              />

              <Text>Cidade</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.city"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress.city
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Cidade"
                  />
                )}
              />

              <Text>Estado</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.state"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress.state
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="Estado"
                  />
                )}
              />

              <Text>CEP</Text>
              <Controller
                control={form.control}
                name="CustomerAddresses.zip_code"
                render={({ field }) => (
                  <Input
                    defaultValue={
                      pedido.Customer.CustomerAddresses[0].CustomerAddress
                        .zip_code
                    }
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder="CEP"
                  />
                )}
              />
            </View>
          </ScrollView>
        </View>

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
              onPress={form.handleSubmit(onUpdateCustomerInfo)}
              width={"90%"}
              fontSize={18}
              color={"white"}
              backgroundColor={"#1890ff"}
            >
              Confirmar
            </Button>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}
