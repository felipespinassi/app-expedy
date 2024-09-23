import React from "react";
import { useNavigation } from "@react-navigation/native";

import ItemsToPickComponent from "../../../views/ExpedicaoRapida/components/ItemsToPick";
import Header from "../../../components/Header/Header";

export default function ItemsToPick(props: any) {
  const navigation: any = useNavigation();

  const params = props.route.params;

  return (
    <>
      <Header showArrow navigation={navigation}>
        Separação
      </Header>
      <ItemsToPickComponent params={params} />
    </>
  );
}
