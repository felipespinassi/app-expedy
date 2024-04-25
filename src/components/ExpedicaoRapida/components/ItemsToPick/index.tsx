import { KeyboardAvoidingView } from "react-native";
import { useToastController } from "@tamagui/toast";

import React, { useState } from "react";
import { Button, Card, H4, H5, Input } from "tamagui";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { onPickProduct } from "../../utils/onPickProduct";

import { View } from "react-native";
import { PickingProduct } from "../../@types/PickingProduct";

interface Props {
  params: {
    produto: PickingProduct;
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
      <View
        style={{ justifyContent: "space-around", height: "90%", padding: 5 }}
      >
        <View style={{ alignItems: "center" }}>
          <H4 textAlign="center">{params.produto.database_name}</H4>
        </View>

        <View style={{ alignItems: "center" }}>
          <H5>SKU: {params.produto.reference}</H5>
        </View>

        <View style={{ alignItems: "center" }}>
          <Card
            justifyContent="center"
            gap={50}
            w={"85%"}
            h={"$15"}
            elevate
            size="$4"
            bordered
          >
            <View style={{ alignItems: "center" }}>
              <H5>
                Quantidade Restante:{" "}
                {params?.produto?.controle?.quantidadeRestante}
              </H5>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
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
          <View style={{ alignItems: "center" }}>
            <Button width={"85%"} color={"white"} backgroundColor={"#1890ff"}>
              Confirmar
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
