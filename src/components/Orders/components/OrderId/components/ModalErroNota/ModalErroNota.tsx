import { View, Text, Modal } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { X } from "@tamagui/lucide-icons";
import { Button } from "tamagui";

export default function ModalErroNota({
  pedido,
  openModalErroNota,
  setOpenModalErroNota,
}: any) {
  return (
    <Modal
      presentationStyle="formSheet"
      animationType="slide"
      visible={openModalErroNota}
    >
      <View style={{ alignItems: "flex-end", padding: 10 }}>
        <TouchableOpacity onPress={() => setOpenModalErroNota(false)}>
          <X size={26} color={"black"} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          padding: 20,
          color: "#ec5353",
        }}
      >
        {pedido.erroNota}
      </Text>

      <View style={{ gap: 10, padding: 20 }}>
        <Button backgroundColor={"#1890ff"}>Atualizar XML</Button>
        <Button backgroundColor={"#1890ff"}>Enviar Para o Marketplace</Button>
      </View>
    </Modal>
  );
}
