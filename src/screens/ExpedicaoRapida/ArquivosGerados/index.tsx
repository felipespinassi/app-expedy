import React from "react";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../views/ExpedicaoRapida/components/ArquivosGerados";
import Header from "../../../components/Header/Header";
import { Theme } from "tamagui";

export default function ArquivosGerados() {
  const navigation = useNavigation();
  return (
    <Theme name={"light"}>
      <Header showArrow navigation={navigation}>
        Arquivos Gerados
      </Header>

      <ArquivosGeradosComponent />
    </Theme>
  );
}
