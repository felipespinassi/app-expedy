import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default class ListEmptyComponent extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>Nenhum Item Encontrado</Text>
        <AntDesign name="exclamationcircleo" size={40} color="black" />
      </View>
    );
  }
}
