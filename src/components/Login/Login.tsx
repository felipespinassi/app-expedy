import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { createAccess_token } from "../../storage/createAccess_token";
import { createCompanyName } from "../../storage/createCompanyName";
import { AuthContext } from "../../context/AuthContext";
import { config } from "../../services/apiConfig";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { createRefreshToken } from "../../storage/createRefreshToken";

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
      const response = await fetch(`${config.baseURL}auth?refresh`, {
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
        createRefreshToken(data.refresh_token),
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
      className="flex-1 justify-center bg-[#19223E]"
    >
      <View className=" gap-8 items-center ">
        <Image
          className="w-3/5 h-18  "
          alt="Logo Expedy"
          source={require("../../../assets/expedy-logo.png")}
          style={{ resizeMode: "contain" }}
        />

        <View className="gap-8 w-10/12">
          <Input
            className="w-full "
            placeholder="Digite o código da empresa"
            keyboardType="numeric"
            onChangeText={(text) => setValue("companyCode", text)}
          />

          <Input
            className="w-full "
            placeholder="Usuário"
            onChangeText={(text) => setValue("login", text)}
          />

          <Input
            className="w-full "
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => setValue("password", text)}
          />
        </View>
      </View>
      <View className="items-center">
        <Button
          className="border-10 mt-12 w-4/5 h-12 bg-secondary text-white"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        >
          Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
