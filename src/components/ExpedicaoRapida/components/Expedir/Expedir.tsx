import { useState } from "react";
import { Button, Form, Input, Label, View, XStack, YStack } from "tamagui";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { getAccess_token } from "../../../../storage/getAccess_token";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";
import { useForm } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";

export default function Expedir() {
  const [integracaoId, setIntegracaoId] = useState("");

  const { getValues, setValue, register } = useForm();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  async function onGerarArquivo() {
    const values = getValues();
    const params = new URLSearchParams();
    Object.keys(values).map((key) => {
      const value = values[key];
      params.append(key, value);
    });
    try {
      const response = await fetcher(
        `${
          config.baseURL
        }orders/file/create?usuario=Expedy&${params.toString()}`,
        { method: "POST" }
      );
      return Alert.alert("Arquivo gerado");
    } catch (error) {
      console.log(error);
    }
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Form onSubmit={onGerarArquivo} gap={20} padding={20}>
          <XStack ai="center" gap="$4">
            <Label htmlFor="selectIntegracoes" f={1} miw={80}>
              Integração
            </Label>

            <SelectIntegracoes
              setValue={setValue}
              setIntegracaoId={setIntegracaoId}
              integracaoId={integracaoId}
              id="selectIntegracoes"
            />
          </XStack>
          <XStack ai="center" gap="$4">
            <Label htmlFor="selectMarketplace" f={1} miw={80}>
              Marketplace
            </Label>

            <SelectMarkeplace setValue={setValue} id="selectMarketplace" />
          </XStack>
          <XStack ai="center" gap="$4">
            <Label htmlFor="maisVendidos" f={1} miw={80}>
              Produtos mais vendidos
            </Label>

            <SelectMaisVendidos setValue={setValue} />
          </XStack>
          <XStack>
            <Label htmlFor="data" f={1} miw={80}>
              Aguardando desde:
            </Label>
            <View>
              <Button
                backgroundColor={"#1890ff"}
                color={"white"}
                onPress={showDatePicker}
              >
                Selecionar Data
              </Button>
              <DateTimePickerModal
                confirmTextIOS="Confirmar"
                cancelTextIOS="Cancelar"
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                timeZoneName="America/Sao_Paulo"
                mode="date"
                locale="pt_BR"
                onChange={(e) => setValue("dataCriacao_from", e)}
              />
            </View>
          </XStack>

          <XStack ai="center" gap="$4">
            <Label htmlFor="sku" f={1} miw={80}>
              SKU
            </Label>
            <Input
              onChangeText={(e) => setValue("unico_sku", e)}
              width={"50%"}
            />
          </XStack>
          <XStack ai="center" gap="$4">
            <Label htmlFor="idMp" f={1} miw={80}>
              ID Marketplace
            </Label>
            <Input onChangeText={(e) => setValue("orderid", e)} width={"50%"} />
          </XStack>
          <XStack ai="center" gap="$4">
            <Label htmlFor="id" f={1} miw={80}>
              ID expedy
            </Label>
            <Input onChangeText={(e) => setValue("id", e)} width={"50%"} />
          </XStack>
          <Form.Trigger asChild>
            <TouchableOpacity>
              <View theme={"orange_active"} alignItems="center">
                <Button
                  width={"85%"}
                  color={"white"}
                  backgroundColor={"#1890ff"}
                >
                  GerarArquivo
                </Button>
              </View>
            </TouchableOpacity>
          </Form.Trigger>
          <TouchableOpacity>
            <View alignItems="center">
              <Button width={"85%"}>Limpar Filtros</Button>
            </View>
          </TouchableOpacity>
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
