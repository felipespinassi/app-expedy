import React from "react";
import ExpedicaoRapidaComponent from "../../components/ExpedicaoRapida";
import { Heading, Theme, View } from "tamagui";

export default function ExpedicaoRapida() {
  return (
    <Theme name={"light"}>
      <View
        backgroundColor={"#002851"}
        height={"15%"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <Heading color={"white"}>Expedição</Heading>
      </View>

      <ExpedicaoRapidaComponent />
    </Theme>
  );
}
