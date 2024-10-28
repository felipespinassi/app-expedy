import React from "react";
import { useNavigation } from "@react-navigation/native";

import ItemsToPickComponent from "../../../views/ExpedicaoRapida/components/ItemsToPick";
import Header from "../../../components/Header/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@types/StackRoutesTypes";

type Props = NativeStackScreenProps<RootStackParamList, "ItemsToPick">;

export default function ItemsToPick({ navigation, route }: Props) {
  const params = route.params;

  return (
    <>
      <Header showArrow navigation={navigation}>
        Separação
      </Header>
      <ItemsToPickComponent params={params} />
    </>
  );
}
