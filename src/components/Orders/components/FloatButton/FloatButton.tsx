import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Plus } from "@tamagui/lucide-icons";
import { Text, View } from "tamagui";

export default function FloatButton() {
  const [open, setOpen] = useState(false);
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
          backgroundColor={"$green4Light"}
        >
          <TouchableOpacity onPress={() => alert("Emitir Nota Fiscal")}>
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
          backgroundColor="#002851"
          padding={20}
          borderRadius={50}
        >
          <Plus color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
