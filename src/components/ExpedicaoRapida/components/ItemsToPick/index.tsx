import { KeyboardAvoidingView } from "react-native";
import { useToastController } from "@tamagui/toast";

import React, { useState } from "react";
import { Button, Card, H4, H5, Input, View } from "tamagui";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { onPickProduct } from "../utils/onPickProduct";
import { Product } from "../../../../@types/Products";

interface Props {
  params: {
    produto: Product;
    fileId: string;
  };
}

export default function ItemsToPick({ params }: Props) {
  const [quantity, setQuantity] = useState("");

  const toast = useToastController();

  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View jc={"space-around"} h={"90%"} padding={5}>
        <View alignItems="center">
          <H4 textAlign="center">{params.produto.database_name}</H4>
        </View>

        <View alignItems="center">
          <H5>SKU: {params.produto.reference}</H5>
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
              <H5>
                Quantidade Restante:{" "}
                {params.produto.controle.quantidadeRestante}
              </H5>
            </View>

            <View alignItems="center" justifyContent="center">
              <Input
                onChangeText={(e) => setQuantity(e)}
                borderWidth={2}
                keyboardType="numeric"
                w={"$6"}
              />
            </View>
          </Card>
        </View>
        <TouchableOpacity
          onPress={() => onPickProduct(params, quantity, toast, navigation)}
        >
          <View theme={"orange_active"} alignItems="center">
            <Button width={"85%"} color={"white"} backgroundColor={"#c2410c"}>
              Confirmar
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
