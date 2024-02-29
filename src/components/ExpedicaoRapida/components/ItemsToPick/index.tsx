import { Alert, KeyboardAvoidingView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Card,
  H4,
  H5,
  Input,
  Text,
  Theme,
  View,
  YStack,
} from "tamagui";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "../../../../@types/NavigationTypes";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  produto: {
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
    fileId: any;
  };
}

export default function ItemsToPick({ produto }: Props) {
  async function onPickProduct(produto: any) {
    try {
      const response = await axios.put(
        `https://api.expedy.com.br/orders/file/putpicking/${produto.fileId}?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXBvIjoidXNlciIsImlkIjo4MiwibmFtZSI6IkV4cGVkeSIsImxvZ2luIjoiZXhwZWR5IiwiZW1haWwiOiJleHBlZHk4MkBleHBlZHkuY29tLmJyIiwiY29tcGFueSI6ODIsInBlcm1pc3Npb25zIjpbXSwicHJpbWVpcm9BY2Vzc28iOmZhbHNlLCJzdGF0dXNDb250YSI6ImF0aXZvIiwicGF5bWVudEluZm8iOnsic3RhdHVzIjoicGFpZCIsImJhbmtJZCI6Ijc1OTYzMTI4IiwiZHVlX2F0IjoiMjAyNC0wMi0xMVQwMjo1OTo1OS4wMDBaIn0sImlhdCI6MTcwOTIxMjkxMywiZXhwIjoxNzA5Mjk5MzEzfQ.1YopSSZRZdQq2buwPHurFM9YpwY5u2aPT1TSYxddFFE`,
        {
          produto: {
            id: produto.produto.product_id,
            quantidade: 1,
          },
        }
      );
      return Alert.alert("Produto atualizado");
    } catch (error) {
      return Alert.alert("Não foi possivel atualizar");
    }
  }
  const navigation = useNavigation<NavigationTypes>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text></Text>
      <View jc={"space-around"} h={"90%"} padding={5}>
        <View alignItems="center">
          <H4 textAlign="center">{produto.produto.database_name}</H4>
        </View>

        <View alignItems="center">
          <H5>SKU: {produto.produto.reference}</H5>
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
              <H5>Quantidade necessária: {produto.produto.quantity}</H5>
            </View>

            <View alignItems="center" justifyContent="center">
              <Input borderWidth={2} keyboardType="numeric" w={"$6"} />
            </View>
          </Card>
        </View>
        <TouchableOpacity onPress={() => onPickProduct(produto)}>
          <View theme={"dark"} alignItems="center">
            <Button>Confirmar</Button>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
