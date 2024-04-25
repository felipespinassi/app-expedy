import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Theme } from "tamagui";
import ExpedirComponent from "../../../views/ExpedicaoRapida/components/Expedir/Expedir";
import Header from "../../../components/Header/Header";

export default function Expedir() {
  const navigation: any = useNavigation();

  return (
    <Theme name={"light"}>
      <Header showArrow navigation={navigation}>
        Expedir
      </Header>
      <ExpedirComponent />
    </Theme>
  );
}
