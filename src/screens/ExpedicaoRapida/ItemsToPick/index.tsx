import React from "react";
import { Theme } from "tamagui";
import { useNavigation } from "@react-navigation/native";

import ItemsToPickComponent from "../../../components/ExpedicaoRapida/components/ItemsToPick";
import Header from "../../../components/Header/Header";

export default function ItemsToPick(props: any) {
  const navigation: any = useNavigation();

  const params = props.route.params;

  return (
    <Theme name={"light"}>
      <Header showArrow navigation={navigation}>
        Separação
      </Header>
      <ItemsToPickComponent params={params} />
    </Theme>
  );
}
