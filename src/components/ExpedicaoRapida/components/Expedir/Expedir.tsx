import { useMemo, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";

import type { FontSizeTokens, SelectProps } from "tamagui";

import {
  Adapt,
  Button,
  Label,
  Select,
  Sheet,
  View,
  XStack,
  YStack,
  getFontSize,
} from "tamagui";
import { getService } from "../../../../services/getService";
import SelectIntegracoes from "./components/SelectIntegracoes/SelectIntegracoes";
import { getAccess_token } from "../../../../storage/getAccess_token";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Expedir() {


  async function onGerarArquivo() {
    const access_token = await getAccess_token();

    try {
      const response = await axios.post(`https://api.expedy.com.br/orders/file/create?access_token=${access_token}&usuario=Expedy`,{
        pedidos: [10317223]
    })

      
    } catch (error) {
    console.log(error)
      
    }


}


  return (
    <YStack padding={5} gap="$4">
      <XStack ai="center" gap="$4">
        <Label htmlFor="select-demo-1" f={1} miw={80}>
          Integração
        </Label>

        <SelectIntegracoes id="select-demo-1" />
      </XStack>
      <TouchableOpacity onPress={() => onGerarArquivo()}>
        <View theme={"dark"}>
        <Button>Gerar Arquivo</Button>
      </View>
      </TouchableOpacity>

      
    </YStack>
  );
}

