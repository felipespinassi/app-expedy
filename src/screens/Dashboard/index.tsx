import { Avatar, Center, Heading, View, VStack } from "native-base";
import { Text } from "react-native";

export function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <VStack>
        <Center maxWidth={"90%"} padding={3} bg={"light.200"} rounded="md">
          <View style={{ justifyContent: "flex-start" }}>
            <View style={{ padding: 15 }}>
              <Heading size={"md"}>Notas de atualização</Heading>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 15,
                alignItems: "center",
              }}
            >
              <View style={{ paddingRight: 10 }}>
                <Avatar
                  size={"sm"}
                  bg="cyan.500"
                  source={require("../../../assets/favicon.png")}
                />
              </View>
              <View>
                <Text>Escrito por expedy</Text>
                <Text>16/03/2023</Text>
              </View>
            </View>
            <View>
              <Heading style={{ paddingBottom: 10 }} size={"sm"}>
                Novas funcionalidades e melhorias no layout
              </Heading>
              <View pt={3}>
                <Text style={{ lineHeight: 20 }}>
                  Segue as novas atualizações incríveis em nossa plataforma para
                  proporcionar uma experiência ainda mais fluida, rápida e
                  intuitiva #RápidoProdutivo.💙💙
                </Text>
              </View>
            </View>
          </View>
        </Center>
      </VStack>
    </View>
  );
}
