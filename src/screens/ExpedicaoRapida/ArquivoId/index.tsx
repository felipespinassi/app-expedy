import React from "react";

import ArquivoIdComponent from "../../../components/ExpedicaoRapida/components/ArquivoId/index";
import { Heading, Theme, View } from "tamagui";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";

export default function ArquivoId(props: any) {
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
        <Heading color={"white"}>Arquivo</Heading>
      </View>
      <ArquivoIdComponent fileId={props.route.params._id} />
    </Theme>
  );
}
