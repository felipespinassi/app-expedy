import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ArrowBack({ navigation }: any) {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        width: "90%",
        padding: 5,
        position: "relative",
        bottom: -40,
        right: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons color={"#fff"} name="arrow-back-outline" size={36} />
      </TouchableOpacity>
    </View>
  );
}
