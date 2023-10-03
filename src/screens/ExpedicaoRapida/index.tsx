import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Heading } from "native-base";

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
          Expedição 2.0
        </Heading>
      </View>

      <SafeAreaView>
        <Text>index</Text>
      </SafeAreaView>
    </>
  );
}
