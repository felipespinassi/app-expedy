import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Heading, Theme } from "tamagui";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { View } from "tamagui";
import { SelectDemo } from "../../../components/ExpedicaoRapida/components/Expedir/Expedir";

export default function Expedir() {
  const navigation: any = useNavigation();

  return (
    <Theme name={"light"}>
      <View
        backgroundColor={"#002851"}
        height={"15%"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>Expedir</Heading>
      </View>
      <SelectDemo />
    </Theme>
  );
}
