import React from "react";
import { useNavigation } from "@react-navigation/native";
import ArquivosGeradosComponent from "../../../views/ExpedicaoRapida/components/ArquivosGerados";
import Header from "../../../components/Header/Header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@types/StackRoutesTypes";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ArquivosGerados"
>;

export default function ArquivosGerados() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <>
      <Header showArrow navigation={navigation}>
        Arquivos Gerados
      </Header>

      <ArquivosGeradosComponent />
    </>
  );
}
