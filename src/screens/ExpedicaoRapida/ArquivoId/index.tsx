import React from "react";
import ArquivoIdComponent from "../../../views/ExpedicaoRapida/components/ArquivoId/index";
import Header from "../../../components/Header/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@types/StackRoutesTypes";

type Props = NativeStackScreenProps<RootStackParamList, "ArquivoId">;

export default function ArquivoId({ navigation, route }: Props) {
  const fileId = route.params._id;

  return (
    <>
      <Header showArrow navigation={navigation}>
        Arquivo
      </Header>
      <ArquivoIdComponent fileId={fileId} />
    </>
  );
}
