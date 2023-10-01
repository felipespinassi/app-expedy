import { Text, View } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Heading } from "native-base";

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
        <Heading paddingBottom={5} fontWeight={500} size={"md"}>
          Nenhum Item Encontrado
        </Heading>
        <AntDesign name="exclamationcircleo" size={40} color="black" />
      </View>
    );
  }
}
