import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Plus } from "@tamagui/lucide-icons";
import { Text, View } from "tamagui";
import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";

export default function FloatButton({
  selectedOrders,
  setSelectedOrders,
}: any) {
  const [open, setOpen] = useState(false);

  async function onEmitirNota() {
    const token = await getAccess_token();
    try {
      const response = await axios.post(
        `https://api.expedy.com.br/faturador?faturador=apiFiscal&tipo=danfe&access_token=${token}`,
        {
          pedidoId: selectedOrders,
        }
      );
      setSelectedOrders([]);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <View
      top={"80%"}
      right={"2%"}
      zIndex={10}
      position={"absolute"}
      padding={20}
    >
      {open && (
        <View
          borderRadius={20}
          width={200}
          position="absolute"
          top={-100}
          right={10}
          shadowColor={"black"}
          shadowRadius={2}
          backgroundColor={"white"}
        >
          <TouchableOpacity onPress={() => onEmitirNota()}>
            <View padding={20}>
              <Text>Emitir Nota Fiscal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("preparar etiqueta")}>
            <View padding={20}>
              <Text>Preparar Etiqueta</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={() => setOpen(!open)}>
        <View
          width={65}
          backgroundColor="#1890ff"
          padding={20}
          shadowColor={"black"}
          shadowRadius={1}
          borderRadius={50}
        >
          <Plus color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
