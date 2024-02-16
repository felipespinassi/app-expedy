import React from "react";
import { Heading } from "native-base";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../components/ExpedicaoRapida/components/ArquivosGerados";
import { View } from "tamagui";

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
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Arquivos Gerados
        </Heading>
      </View>
      <ArquivosGeradosComponent />
    </>
  );
}
