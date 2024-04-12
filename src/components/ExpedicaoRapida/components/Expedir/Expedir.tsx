import { Button, Form, Input, Label, Separator } from "tamagui";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";
import { useForm } from "react-hook-form";
import SelectMaisVendidos from "./components/SelectMaisVendidos/SelectMaisVendidos";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";

export default function Expedir() {
  const { getValues, setValue, register } = useForm();

  async function onGerarArquivo() {
    const values = getValues();
    const params = new URLSearchParams();
    Object.keys(values).map((key) => {
      const value = values[key];
      params.append(key, value);
    });

    if (Object.keys(values).length <= 0) {
      return Alert.alert("Selecione um filtro para gerar o arquivo");
    }
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

    console.log(values);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Form onSubmit={onGerarArquivo} gap={20} padding={20}>
          <View style={{ flexDirection: "row" }}>
            <SelectIntegracoes setValue={setValue} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <SelectMarkeplace setValue={setValue} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <SelectMaisVendidos setValue={setValue} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Input
              placeholderTextColor={"black"}
              placeholder=" SKU"
              onChangeText={(e) => setValue("unico_sku", e)}
              width={"100%"}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Input
              placeholderTextColor={"black"}
              placeholder=" Marketplace"
              onChangeText={(e) => setValue("orderid", e)}
              width={"100%"}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Input
              placeholderTextColor={"black"}
              placeholder=" ID Hub"
              onChangeText={(e) => setValue("id", e)}
              width={"100%"}
            />
          </View>
          {/* <View style={{ flexDirection: "row", gap: 10 }}>
            <DatePicker setValue={setValue} />
          </View> */}
          <Separator />

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
          {/* <TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Button backgroundColor={"$white075"} width={"100%"}>
                Limpar Filtros
              </Button>
            </View>
          </TouchableOpacity> */}
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
