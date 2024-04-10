import React from "react";
import { Heading } from "tamagui";
import ArrowBack from "../ArrowBack/ArrowBack";
import { View } from "react-native";

interface HeaderProps {
  navigation?: any;
  children: string;
  showArrow?: boolean;
}

export default function Header({
  navigation,
  children,
  showArrow,
}: HeaderProps) {
  return (
    <View
      style={{
        backgroundColor: "#002851",
        height: 110,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 15,
      }}
    >
      {showArrow ? <ArrowBack navigation={navigation} /> : <></>}
      <Heading color={"white"}>{children}</Heading>
    </View>
  );
}
