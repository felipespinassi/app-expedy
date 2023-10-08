import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Heading } from "native-base";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../components/ExpedicaoRapida/components/ArquivosGerados";

export default function ArquivosGerados() {
  const navigation = useNavigation();
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
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Arquivos Gerados
        </Heading>
      </View>
      <ArquivosGeradosComponent />
    </>
  );
}
