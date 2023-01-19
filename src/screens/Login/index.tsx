import { Alert, Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
  WarningOutlineIcon,
} from "native-base";
import { useEffect } from "react";
import axios from "axios";

export function Login({ navigation }: any) {
  async function getUser() {
    const response = await axios.post("https://api.expedy.com.br/auth", {
      companyCode: "3",
      login: "gvm",
      password: "gvmgvm",
    });
    if (response.status === 200) {
      navigation.navigate("Dashboard");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo-transparente.png")}
        />
        <Center w={"80%"}>
          <FormControl isRequired>
            <Input
              size={"lg"}
              _focus={{ borderColor: "red.500", bg: "white" }}
              marginTop={5}
              placeholder="Código"
              placeholderTextColor="#6b6b6b"
              variant="rounded"
              keyboardType="numeric"
            />
          </FormControl>
          <FormControl>
            <Input
              autoCapitalize="none"
              size={"lg"}
              _focus={{ borderColor: "red.500", bg: "white" }}
              marginTop={5}
              placeholder="Usuário"
              placeholderTextColor="#6b6b6b"
              variant="rounded"
            />
          </FormControl>
          <FormControl>
            <Input
              size={"lg"}
              _focus={{ borderColor: "red.500", bg: "white" }}
              marginTop={5}
              placeholder="Senha"
              placeholderTextColor="#6b6b6b"
              secureTextEntry={true}
              variant="rounded"
              autoCapitalize="none"
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </View>
      <View style={styles.containerButton}>
        <Button
          borderRadius={30}
          style={styles.button}
          backgroundColor={"red.500"}
          onPress={() => getUser()}
        >
          Login
        </Button>
      </View>
    </View>
  );
}
