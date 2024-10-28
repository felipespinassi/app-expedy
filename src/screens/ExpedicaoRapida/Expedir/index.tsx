import { RouteProp, useNavigation } from "@react-navigation/native";
import React from "react";
import ExpedirComponent from "../../../views/ExpedicaoRapida/components/Expedir/Expedir";
import Header from "../../../components/Header/Header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@types/StackRoutesTypes";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Expedir"
>;

export default function Expedir() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <>
      <Header showArrow navigation={navigation}>
        Expedir
      </Header>
      <ExpedirComponent />
    </>
  );
}
