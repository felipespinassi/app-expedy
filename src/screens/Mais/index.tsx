import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import { Heading } from "native-base";

export default function Mais({ navigation }: any) {
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
        <ArrowBack navigation={navigation} />
      </View>
      <SafeAreaView>
        <Text>Menu de outras coisas que n tem icone aqui </Text>
      </SafeAreaView>
    </>
  );
}
