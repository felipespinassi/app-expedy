import { Image, Linking, Pressable, View } from "react-native";
import Header from "../../components/Header/Header";

export function Home() {
  return (
    <>
      <Header showArrow={false}>Início</Header>
      <View className="flex-1 justify-center items-center bg-background dark:bg-darkBackground">
        <Pressable
          onPress={() => Linking.openURL("https://wa.me/16999758383")}
          className="  w-full h-full items-center justify-center "
        >
          <Image
            style={{
              width: "90%",
              height: 500,
              borderRadius: 20,
            }}
            source={require("../../../assets/etiquetas.jpeg")}
          />
        </Pressable>
      </View>
    </>
  );
}
