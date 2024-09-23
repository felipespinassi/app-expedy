import { useNavigation } from "@react-navigation/native";
import React from "react";
import ExpedirComponent from "../../../views/ExpedicaoRapida/components/Expedir/Expedir";
import Header from "../../../components/Header/Header";

export default function Expedir() {
  const navigation: any = useNavigation();

  return (
    <>
      <Header showArrow navigation={navigation}>
        Expedir
      </Header>
      <ExpedirComponent />
    </>
  );
}
