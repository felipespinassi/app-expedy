import React from "react";
import { getService } from "../../../../services/getService";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert, View } from "react-native";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import { Card, CardHeader, CardTitle } from "../../../../../components/Card";
import { Button } from "../../../../../components/Button";

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
      <View style={{ paddingHorizontal: 5, gap: 20, marginTop: 10 }}>
        <TouchableOpacity
          className="w-11/12"
          onPress={() => navigation.navigate("ListaSeparacao", fileId)}
        >
          <View>
            <Card className="bg-background h-28 justify-center">
              <CardHeader className="w-full px-10 flex flex-row gap-4 ">
                <CardTitle className="text-foreground font-normal">
                  Lista de Separação
                </CardTitle>
              </CardHeader>
            </Card>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-11/12">
          <View>
            <Card className="bg-background h-28 justify-center">
              <CardHeader className="w-full px-10 flex flex-row gap-4 ">
                <CardTitle className="text-foreground font-normal">
                  Pedidos
                </CardTitle>
              </CardHeader>
            </Card>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePrintFile(fileId)}>
          <View style={{ marginTop: 20 }}>
            <Button
              label="Imprimir Arquivo"
              variant={"default"}
              className="h-12"
            ></Button>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
