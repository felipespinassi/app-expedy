import { Image, View } from "react-native";
import Header from "../../components/Header/Header";

export function Home() {
  return (
    <>
      <Header showArrow={false}>Início</Header>
      <View className="flex-1 justify-center items-center bg-background dark:bg-darkBackground">
        <Image
          style={{ width: "80%", height: 200 }}
          source={require("../../../assets/liveExpedy.png")}
        />
      </View>
    </>
  );
}
