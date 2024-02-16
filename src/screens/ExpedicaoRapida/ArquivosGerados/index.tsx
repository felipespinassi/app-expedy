import React from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../components/ExpedicaoRapida/components/ArquivosGerados";
import { Heading, View } from "tamagui";

export default function ArquivosGerados() {
  const navigation = useNavigation();
  return (
    <>
      <View
        backgroundColor={"#002851"}
        height={"15%"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>Arquivos Gerados</Heading>
      </View>
      <ArquivosGeradosComponent />
    </>
  );
}
