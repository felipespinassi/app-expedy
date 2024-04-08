import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { createAccess_token } from "../../storage/createAccess_token";
import { createCompanyName } from "../../storage/createCompanyName";
import { Button, Image, Spinner } from "tamagui";
import { AuthContext } from "../../context/AuthContext";
import { config } from "../../services/apiConfig";

export default function Login({ navigation }: any) {
  const { register, setValue, handleSubmit } = useForm<Dataprops>();
  const [loading, setLoading] = useState(false);

  interface Dataprops {
    companyCode: string;
    login: string;
    password: string;
  }

  const { setIsLogged } = useContext(AuthContext);

  async function onSubmit(data: Dataprops) {
    setLoading(true);
    const companyCode = data.companyCode;
    const login = data.login;
    const password = data.password;
    try {
      const response = await fetch(`${config.baseURL}auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyCode,
          login,
          password,
        }),
      });
      const data = await response.json();

      await Promise.all([
        createAccess_token(data.access_token),
        createCompanyName(data.usuario.companyName),
      ]);

      setIsLogged(true);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    register("companyCode");
    register("login");
    register("password");
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#19223E" }}
    >
      <View style={{ gap: 20, alignItems: "center" }}>
        <Image
          resizeMode="contain"
          width={350}
          height={44}
          alt="Logo Expedy"
          source={{ uri: require("../../../assets/expedy-logo.png") }}
        />

        <View style={{ gap: 10, width: "85%" }}>
          <TextInput
            style={{
              padding: 15,
              marginTop: 5,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onChangeText={(text) => setValue("companyCode", text)}
            placeholder="Código"
            placeholderTextColor="#6b6b6b"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              padding: 15,
              marginTop: 5,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onChangeText={(text) => setValue("login", text)}
            autoCapitalize="none"
            placeholder="Usuário"
            placeholderTextColor="#6b6b6b"
          />
          <TextInput
            style={{
              padding: 15,
              marginTop: 5,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onChangeText={(text) => setValue("password", text)}
            placeholder="Senha"
            placeholderTextColor="#6b6b6b"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        {loading ? (
          <Button
            borderRadius={10}
            marginTop={50}
            width={"85%"}
            backgroundColor={"#EA582C"}
            color={"white"}
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
            color={"white"}
          >
            Login
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
