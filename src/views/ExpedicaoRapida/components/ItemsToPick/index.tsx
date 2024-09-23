import { KeyboardAvoidingView, Text } from "react-native";

import React, { useState } from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { onPickProduct } from "../../utils/onPickProduct";

import { View } from "react-native";
import { PickingProduct } from "../../@types/PickingProduct";
import { Input } from "../../../../../components/Input";
import { Button } from "../../../../../components/Button";
import { ToastProvider, useToast } from "../../../../../components/Toast";

interface Props {
  params: {
    produto: PickingProduct;
    fileId: string;
  };
}

export default function ItemsToPick({ params }: Props) {
  const [quantity, setQuantity] = useState("");

  const { toast } = useToast();

  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View
        style={{ justifyContent: "space-around", height: "90%", padding: 5 }}
      >
        <View style={{ alignItems: "center" }}>
          <Text className="text-center text-2xl">
            {params.produto.database_name}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text className="text-xl">SKU: {params.produto.reference}</Text>
        </View>
        <View className="bg-white rounded items-center, justify-center h-56 gap-4">
          <View style={{ alignItems: "center" }}>
            <Text>
              Quantidade Restante:{" "}
              {params?.produto?.controle?.quantidadeRestante}
            </Text>
          </View>

          <View className="items-center justify-center ">
            <Input
              onChangeText={(e) => setQuantity(e)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onPickProduct(params, quantity, toast, navigation)}
        >
          <View style={{ alignItems: "center" }}>
            <Button label="Confirmar" className="w-4/5" />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
