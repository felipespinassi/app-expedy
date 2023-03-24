import { Alert, Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import {
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  WarningOutlineIcon,
} from "native-base";
import { useEffect, useState } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { createAccess_token } from "../../storage/createAccess_token";
import { getAccess_token } from "../../storage/getAccess_token";

export function Login({ navigation }: any) {
  const { register, setValue, handleSubmit } = useForm<Dataprops>();
  const [loading, setLoading] = useState(false);

  interface Dataprops {
    companyCode: string;
    login: string;
    password: string;
  }

  async function verifyLogin() {
    const acces_token = await getAccess_token();

    if (acces_token) {
      navigation.navigate("Dashboard");
    }
  }

  async function onSubmit(data: Dataprops) {
    setLoading(true);
    const companyCode = data.companyCode;
    const login = data.login;
    const password = data.password;
    try {
      const response = await axios.post("https://api.expedy.com.br/auth", {
        companyCode,
        login,
        password,
      });
      navigation.navigate("Dashboard");
      await createAccess_token(response.data.access_token);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    register("companyCode");
    register("login");
    register("password");
    verifyLogin();
  }, []);
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
              onChangeText={(text) => setValue("companyCode", text)}
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
              onChangeText={(text) => setValue("login", text)}
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
              onChangeText={(text) => setValue("password", text)}
              size={"lg"}
              _focus={{ borderColor: "red.500", bg: "white" }}
              marginTop={5}
              placeholder="Senha"
              placeholderTextColor="#6b6b6b"
              secureTextEntry={true}
              variant="rounded"
              autoCapitalize="none"
            />
          </FormControl>
        </Center>
      </View>
      <View style={styles.containerButton}>
        <Button
          isLoading={loading}
          borderRadius={30}
          style={styles.button}
          backgroundColor={"primary.900"}
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </View>
    </View>
  );
}
