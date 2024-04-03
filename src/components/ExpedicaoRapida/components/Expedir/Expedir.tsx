import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  Separator,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
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
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";
import DatePicker from "./components/DatePicker/DatePicker";

export default function Expedir() {
  const { getValues, setValue, register } = useForm();

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Form onSubmit={onGerarArquivo} gap={20} padding={20}>
          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              Integração
            </Text>

            <SelectIntegracoes setValue={setValue} />
          </View>
          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              Marketplace
            </Text>

            <SelectMarkeplace setValue={setValue} />
          </View>

          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              Produtos mais vendidos
            </Text>

            <SelectMaisVendidos setValue={setValue} />
          </View>

          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              SKU
            </Text>
            <Input
              placeholderTextColor={"black"}
              placeholder="Selecionar SKU"
              onChangeText={(e) => setValue("unico_sku", e)}
              width={"60%"}
            />
          </View>
          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              ID Marketplace
            </Text>
            <Input
              placeholderTextColor={"black"}
              placeholder="Selecionar Marketplace"
              onChangeText={(e) => setValue("orderid", e)}
              width={"60%"}
            />
          </View>
          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              ID expedy
            </Text>
            <Input
              placeholderTextColor={"black"}
              placeholder="Selecionar ID"
              onChangeText={(e) => setValue("id", e)}
              width={"60%"}
            />
          </View>
          <View flexDirection="row" gap={10}>
            <Text width={"40%"} fontSize={"$5"}>
              Aguardando desde:
            </Text>
            <DatePicker setValue={setValue} />
          </View>
          <Separator />

          <Form.Trigger asChild>
            <TouchableOpacity>
              <View alignItems="center">
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
          <TouchableOpacity>
            <View alignItems="center">
              <Button backgroundColor={"$white075"} width={"100%"}>
                Limpar Filtros
              </Button>
            </View>
          </TouchableOpacity>
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
