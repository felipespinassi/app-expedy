import React from "react";

import ArquivoIdComponent from "../../../views/ExpedicaoRapida/components/ArquivoId/index";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header/Header";

export default function ArquivoId(props: any) {
  const navigation: any = useNavigation();

  return (
    <>
      <Header showArrow navigation={navigation}>
        Arquivo
      </Header>
      <ArquivoIdComponent fileId={props.route.params._id} />
    </>
  );
}
