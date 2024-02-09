import React from "react";

import ArquivoIdComponent from '../../../components/ExpedicaoRapida/components/ArquivoId/index'
import { Heading, Theme, View } from "tamagui";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";

export default function ArquivoId(props: any) {

  const navigation: any = useNavigation();

  
  return (
    <Theme name={'light'}>
    <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>
          Arquivo
        </Heading>
      </View>
      <ArquivoIdComponent file={props.route.params._id} /> 
    </Theme>
  )
}
