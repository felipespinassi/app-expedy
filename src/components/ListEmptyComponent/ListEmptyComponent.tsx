import { Text, View } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

export default class ListEmptyComponent extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text>Nenhum Item Encontrado</Text>
        <AntDesign name="exclamationcircleo" size={40} color="black" />
      </View>
    );
  }
}
