import React from "react";
import { Heading, View } from "tamagui";
import ArrowBack from "../ArrowBack/ArrowBack";

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
      backgroundColor={"#002851"}
      height={150}
      justifyContent="flex-end"
      alignItems="center"
      paddingBottom={15}
    >
      {showArrow ? <ArrowBack navigation={navigation} /> : <></>}
      <Heading color={"white"}>{children}</Heading>
    </View>
  );
}
