import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ArrowBack({ navigation }: any) {
  return (
    <View style={{ justifyContent: "flex-start", width: "90%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}
