import { View, Text } from "react-native";
import React from "react";
import { Input } from "native-base";

export default function Header() {
  return (
    <View
      style={{
        height: "15%",
        backgroundColor: "#002851",
        justifyContent: "flex-end",
        paddingBottom: 10,
      }}
    >
      <Input
        backgroundColor={"white"}
        placeholder="Buscar Pedido Pelo ID"
        rounded={"full"}
      />
    </View>
  );
}
