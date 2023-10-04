import { Avatar, Center, Heading, View, VStack } from "native-base";
import { Image, Text } from "react-native";

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
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Início
        </Heading>
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
