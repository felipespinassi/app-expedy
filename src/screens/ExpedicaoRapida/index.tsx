import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Heading } from "native-base";
import ExpedicaoRapidaComponent from "../../components/ExpedicaoRapida";

export default function ExpedicaoRapida() {
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Expedição
        </Heading>
      </View>

      <ExpedicaoRapidaComponent />
    </>
  );
}
