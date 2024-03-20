import { useState } from "react";
import { Button, Label, View, XStack, YStack } from "tamagui";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { getAccess_token } from "../../../../storage/getAccess_token";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import SelectMarkeplace from "./components/SelectMarketplace/SelectMarketplace";

export default function Expedir() {
  const [integracaoId, setIntegracaoId] = useState("");

  async function onGerarArquivo() {
    const access_token = await getAccess_token();

    try {
      const response = await axios.post(
        `https://api.expedy.com.br/orders/file/create?access_token=${access_token}&usuario=Expedy&integracao=${integracaoId}`,
        {}
      );
      return Alert.alert("Arquivo gerado");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <YStack padding={5} gap={20}>
      <XStack ai="center" gap="$4">
        <Label htmlFor="selectIntegracoes" f={1} miw={80}>
          Integração
        </Label>

        <SelectIntegracoes
          setIntegracaoId={setIntegracaoId}
          integracaoId={integracaoId}
          id="selectIntegracoes"
        />
      </XStack>
      <XStack ai="center" gap="$4">
        <Label htmlFor="selectMarketplace" f={1} miw={80}>
          Marketplace
        </Label>

        <SelectMarkeplace id="selectMarketplace" />
      </XStack>
      <TouchableOpacity onPress={() => onGerarArquivo()}>
        <View theme={"orange_active"} alignItems="center">
          <Button width={"85%"} color={"white"} backgroundColor={"#1890ff"}>
            GerarArquivo
          </Button>
        </View>
      </TouchableOpacity>
    </YStack>
  );
}
