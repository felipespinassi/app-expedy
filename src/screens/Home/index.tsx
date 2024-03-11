import { Image } from "react-native";
import { View } from "tamagui";
import Header from "../../components/Header/Header";

export function Home() {
  return (
    <>
      <Header showArrow={false}>Início</Header>
      <View flex={1} justifyContent="center" alignItems="center">
        <Image
          style={{ width: "80%", height: 200 }}
          source={require("../../../assets/liveExpedy.png")}
        />
      </View>
    </>
  );
}
