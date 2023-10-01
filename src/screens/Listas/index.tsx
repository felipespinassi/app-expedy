import { Avatar, Heading, Text, View } from "native-base";
import React, { useState } from "react";

import { Listas as ListaComponent } from "../../components/Listas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";

export function Listas({ navigation, route }: any) {
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Listas
        </Heading>
      </View>
      <ListaComponent navigation={navigation} route={route} />
    </>
  );
}
