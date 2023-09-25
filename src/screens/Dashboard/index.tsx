import { Avatar, Center, Heading, View, VStack } from "native-base";
import { Image, Text } from "react-native";

export function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: "80%", height: 200 }}
        source={require("../../../assets/liveExpedy.png")}
      />
    </View>
  );
}
