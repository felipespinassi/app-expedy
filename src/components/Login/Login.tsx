import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  PlatformColor,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { createAccess_token } from "../../storage/createAccess_token";
import { createCompanyName } from "../../storage/createCompanyName";
import { styles } from "../../screens/Login/styles";
import { Button, Center, FormControl, Image, Input } from "native-base";
import { verifyInactiveAccess_token } from "../../storage/verifyInactiveAccess_token";

export default function Login({ navigation }: any) {
  const { register, setValue, handleSubmit } = useForm<Dataprops>();
  const [loading, setLoading] = useState(false);

  interface Dataprops {
    companyCode: string;
    login: string;
    password: string;
  }

  async function verifyLogin() {
    verifyInactiveAccess_token(navigation);
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
      await createCompanyName(response.data.usuario.companyName);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    register("companyCode");
    register("login");
    register("password");
    verifyLogin();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.containerInput}>
        <Image
          alt="Logo Expedy"
          style={styles.image}
          source={require("../../../assets/logo-transparente.png")}
        />
        <Center w={"80%"}>
          <FormControl isRequired>
            <Input
              onChangeText={(text) => setValue("companyCode", text)}
              size={"lg"}
              _focus={{ borderColor: "primary.900", bg: "white" }}
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
              _focus={{ borderColor: "primary.900", bg: "white" }}
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
              _focus={{ borderColor: "primary.900", bg: "white" }}
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
          backgroundColor={"#002851"}
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
