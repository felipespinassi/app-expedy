import React from "react";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../components/ExpedicaoRapida/components/ArquivosGerados";
import Header from "../../../components/Header/Header";

export default function ArquivosGerados() {
  const navigation = useNavigation();
  return (
    <>
      <Header showArrow navigation={navigation}>
        Arquivos Gerados
      </Header>

      <ArquivosGeradosComponent />
    </>
  );
}
