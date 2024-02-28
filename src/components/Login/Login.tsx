import {
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
      style={styles.container}
    >
      <View gap={40} theme={"light"} style={styles.containerInput}>
          <Image
          resizeMode="contain"
          width={200}
          height={44}
            alt="Logo Expedy"
            source={{  uri: require("../../../assets/expedy-logo.png")  }}
          />



        <View gap={10} w={"80%"}>
          <Input
            onChangeText={(text) => setValue("companyCode", text)}
            size={"lg"}
            marginTop={5}
            placeholder="Código"
            placeholderTextColor="#6b6b6b"
            keyboardType="numeric"
          />
          <Input
            onChangeText={(text) => setValue("login", text)}
            autoCapitalize="none"
            size={"lg"}
            marginTop={5}
            placeholder="Usuário"
            placeholderTextColor="#6b6b6b"
          />
          <Input
            onChangeText={(text) => setValue("password", text)}
            size={"lg"}
            marginTop={5}
            placeholder="Senha"
            placeholderTextColor="#6b6b6b"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View style={styles.containerButton}>
        {loading ? (
          <Button
            borderRadius={30}
            style={styles.button}
            backgroundColor={"#EA582C"}
          >
            <Spinner />
          </Button>
        ) : (
          <Button
            borderRadius={30}
            style={styles.button}
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
