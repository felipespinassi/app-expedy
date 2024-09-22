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
      <View style={{ gap: 30, alignItems: "center" }}>
        <Image
          className="w-3/5 h-12 object-cover "
          alt="Logo Expedy"
          source={require("../../../assets/expedy-logo.png")}
        />

        <View style={{ gap: 20, width: "85%" }}>
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
            keyboardType="numeric"
            onChangeText={(text) => setValue("password", text)}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        {loading ? (
          <Button
            className="border-10 mt-10 w-4/5 h-12 bg-[#EA582C] text-white"
            label="Carregando..."
          />
        ) : (
          <Button
            className="border-10 mt-12 w-4/5 h-12 bg-[#c2410c] text-white"
            label="Login"
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
