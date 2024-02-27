import { Image, Text } from "react-native";
import { H4, View } from "tamagui";

export function Home() {
  return (
    <>
      <View
        backgroundColor={"#002851"}
        height={"15%"}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <H4 color={"white"}>Início</H4>
      </View>
      <View flex={1} justifyContent="center" alignItems="center">
        <Image
          style={{ width: "80%", height: 200 }}
          source={require("../../../assets/liveExpedy.png")}
        />
      </View>
    </>
  );
}
