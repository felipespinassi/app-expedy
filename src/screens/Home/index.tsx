import { Image, Text, View } from "react-native";
import {  H4 } from "tamagui";

export function Home() {
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
        <H4  color={"white"}>
          Início
        </H4>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: "80%", height: 200 }}
          source={require("../../../assets/liveExpedy.png")}
        />
      </View>
    </>
  );
}
