import React from "react";

import ArquivoIdComponent from "../../../components/ExpedicaoRapida/components/ArquivoId/index";
import { Theme } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header/Header";

export default function ArquivoId(props: any) {
  const navigation: any = useNavigation();

  return (
    <Theme name={"light"}>
      <Header showArrow navigation={navigation}>
        Arquivo
      </Header>
      <ArquivoIdComponent fileId={props.route.params._id} />
    </Theme>
  );
}
