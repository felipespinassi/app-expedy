import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { createAccess_token } from "../../storage/createAccess_token";
import { createCompanyName } from "../../storage/createCompanyName";
import { verifyInactiveAccess_token } from "../../storage/verifyInactiveAccess_token";
import { Button, Image, Input, Spinner, View } from "tamagui";

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
      navigation.navigate("Home");
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
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#19223E" }}
    >
      <View gap={40} alignItems="center" theme={"light"}>
        <Image
          resizeMode="contain"
          width={200}
          height={44}
          alt="Logo Expedy"
          source={{ uri: require("../../../assets/expedy-logo.png") }}
        />

        <View gap={10} width={"85%"}>
          <Input
            height={50}
            onChangeText={(text) => setValue("companyCode", text)}
            marginTop={5}
            placeholder="Código"
            placeholderTextColor="#6b6b6b"
            keyboardType="numeric"
          />
          <Input
            height={50}
            onChangeText={(text) => setValue("login", text)}
            autoCapitalize="none"
            marginTop={5}
            placeholder="Usuário"
            placeholderTextColor="#6b6b6b"
          />
          <Input
            height={50}
            onChangeText={(text) => setValue("password", text)}
            marginTop={5}
            placeholder="Senha"
            placeholderTextColor="#6b6b6b"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View alignItems="center">
        {loading ? (
          <Button
            borderRadius={10}
            marginTop={50}
            width={"85%"}
            backgroundColor={"#EA582C"}
          >
            <Spinner />
          </Button>
        ) : (
          <Button
            marginTop={50}
            width={"85%"}
            borderRadius={10}
            backgroundColor={"#c2410c"}
            onPress={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
