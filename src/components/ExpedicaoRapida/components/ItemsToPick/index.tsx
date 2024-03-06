import { Alert, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { ToastViewport } from "@tamagui/toast";
import { Toast, useToastController, useToastState } from "@tamagui/toast";

import React, { useState } from "react";
import { Button, Card, H4, H5, Input, Text, Theme, View, YStack } from "tamagui";
import { Platform } from "react-native";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { useNavigation } from "@react-navigation/native";
import { ToastDemo } from "../../../ToastDemo";

interface Props {
  params: {
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
      controle: {
        quantidadeTotal: number;
        quantidadeConferida: number;
        quantidadeRestante: number;
      };
    };
    fileId: string;
  };
}

  export default function ItemsToPick({ params }: Props) {

  const toast = useToastController();

  const navigation = useNavigation<any>();

  async function onPickProduct(produto: any) {
    const access_token = await getAccess_token();

    try {
      const response = await axios.put(
        `https://api.expedy.com.br/orders/file/putpicking/${params.fileId}?access_token=${access_token}`,
        {
          produto: {
            id: produto.product_id,
            quantidade: 1,
          },
        }
      );
      await toast.show("Salvo com sucesso!", {
        message: "Produto separado.",
      });
     
    } catch (error) {
      console.log(error);
      return Alert.alert("Não foi possivel atualizar");
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ToastViewport />
      <ToastDemo/>
      <View jc={"space-around"} h={"90%"} padding={5}>
        <View alignItems="center">
          <H4 textAlign="center">{params.produto.database_name}</H4>
        </View>

        <View alignItems="center">
          <H5>SKU: {params.produto.reference}</H5>
        </View>

        <View alignItems="center">
          <Card justifyContent="center" gap={50} w={"85%"} h={"$15"} elevate size="$4" bordered>
            <View alignItems="center">
              <H5>Quantidade Restante: {params.produto.controle.quantidadeRestante}</H5>
            </View>

            <View alignItems="center" justifyContent="center">
              <Input borderWidth={2} keyboardType="numeric" w={"$6"} />
            </View>
          </Card>
        </View>
        <TouchableOpacity onPress={() => onPickProduct(params.produto)}>
          <View theme={"dark"} alignItems="center">
            <Button>Confirmar</Button>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
