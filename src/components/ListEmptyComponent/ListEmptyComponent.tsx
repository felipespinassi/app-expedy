import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { CircleAlert } from "lucide-react-native";

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
        <Text
          className="text-foreground dark:text-darkForeground"
          style={{ fontSize: 18 }}
        >
          Nenhum Item Encontrado
        </Text>
        <CircleAlert color="#3b82f6" size={40} />
      </View>
    );
  }
}
