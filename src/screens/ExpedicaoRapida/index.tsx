import React from "react";
import ExpedicaoRapidaComponent from "../../components/ExpedicaoRapida";
import { Heading, Theme, View } from "tamagui";
import Header from "../../components/Header/Header";

export default function ExpedicaoRapida() {
  return (
    <Theme name={"light"}>
      <Header>Expedição </Header>

      <ExpedicaoRapidaComponent />
    </Theme>
  );
}
