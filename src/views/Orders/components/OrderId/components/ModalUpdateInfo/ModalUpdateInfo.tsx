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
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { X } from "lucide-react-native";
import { Input } from "../../../../../../../components/Input";
import { Button } from "../../../../../../../components/Button";
import { useToast } from "../../../../../../../components/Toast";

export default function ModalUpdateInfo({
  pedido,
  setOpenModal,
  openModal,
  refetch,
}: any) {
  const { toast } = useToast();
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
      toast("Informações Atualizadas.", "success");
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
        className="bg-background dark:bg-darkBackground"
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Text
              className="text-foreground dark:text-darkForeground"
              style={{ fontSize: 22, fontWeight: "500" }}
            >
              Atualizar Informações do cliente
            </Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <X size={26} />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ padding: 10 }}>
            <View style={{ gap: 15, paddingBottom: 100 }}>
              <Text className="text-foreground dark:text-darkForeground">
                Cliente
              </Text>

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

              <Text className="text-foreground dark:text-darkForeground">
                Inscrição Estadual
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                CPF
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                CNPJ
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                Endereço
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                Número
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                Bairro
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                Cidade
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                Estado
              </Text>
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

              <Text className="text-foreground dark:text-darkForeground">
                CEP
              </Text>
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
            bottom: "5%",
            right: "1%",
            left: "1%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Button
              label="Confirmar"
              size={"lg"}
              className="w-full"
              onPress={form.handleSubmit(onUpdateCustomerInfo)}
            >
              Confirmar
            </Button>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}
