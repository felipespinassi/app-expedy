import React from "react";
import { getService } from "../../../../services/getService";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, YGroup } from "tamagui";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "tamagui";
import { Alert } from "react-native";
import { NavigationTypes } from "../../../../@types/NavigationTypes";

export default function ArquivoId({ fileId }: { fileId: string }) {
  const navigation = useNavigation<NavigationTypes>();

  async function handlePrintFile(fileSelected: string) {
    const response: any = await getService(
      `orders/file/print?id=${fileSelected}&usuario=Expedy`
    );
    if (response.status === 200) {
      return Alert.alert("Imprimindo");
    } else {
      return Alert.alert("Falha ao imprimir");
    }
  }
  return (
    <>
      <View paddingHorizontal={5} gap={20} marginTop={10}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ListaSeparacao", fileId)}
        >
          <YGroup
            minWidth={"95%"}
            alignSelf="center"
            bordered
            width={240}
            size="$4"
          >
            <YGroup.Item>
              <ListItem
                backgroundColor={"$background075"}
                size={"$7"}
                title="Lista de Separação"
                subTitle="Picking"
              />
            </YGroup.Item>
          </YGroup>
        </TouchableOpacity>
        <TouchableOpacity>
          <YGroup
            minWidth={"95%"}
            alignSelf="center"
            bordered
            width={240}
            size="$4"
          >
            <YGroup.Item>
              <ListItem
                backgroundColor={"$background075"}
                size={"$7"}
                title="Pedidos"
                subTitle="pedidos "
              />
            </YGroup.Item>
          </YGroup>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePrintFile(fileId)}>
          <View marginTop={20} theme={"orange_active"}>
            <Button color={"white"} backgroundColor={"#1890ff"}>
              Imprimir Arquivo
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
