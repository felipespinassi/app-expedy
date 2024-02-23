import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import React from "react";
import { Button, Card, H4, H5, Input, Theme, View } from "tamagui";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "../../../../@types/NavigationTypes";

interface Props {
  produto: {
    database_name: string;
    id: string;
    order_id: string;
    original_name: string;
    price: number;
    product_id: string;
    product_kit_id: string;
    produtoAlterado: boolean;
    quantity: number;
    reference: string;
    tax_name: string;
    variacao: string;
  };
}

export default function ItemsToPick({ produto }: Props) {
  // async function onPickProduct(produto: any) {
  //   const response = await fetch(`https://api.expedy.com.br/test/orders/file/putpicking/${file}`,
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         produto: {
  //           id: produto.id,
  //           quantidade: 1
  //         }
  //       })
  //     })

  //     console.log(response)
  // }
  const navigation = useNavigation<NavigationTypes>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View jc={"space-around"} h={"95%"} padding={5}>
        <View alignItems="center">
          <H4 textAlign="center">{produto.database_name}</H4>
        </View>

        <View alignItems="center">
          <H5>SKU: {produto.reference}</H5>
        </View>

        <View alignItems="center">
          <Card
            justifyContent="center"
            gap={50}
            w={"85%"}
            h={"$15"}
            elevate
            size="$4"
            bordered
          >
            <View alignItems="center">
              <H5>Quantidade necessária: {produto.quantity}</H5>
            </View>

            <View alignItems="center" justifyContent="center">
              <Input borderWidth={2} keyboardType="numeric" w={"$6"} />
            </View>
          </Card>
        </View>

        <View theme={"dark"} alignItems="center">
          <Button
          // onPress={() => onPickProduct(produto)}
          >
            Confirmar
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
