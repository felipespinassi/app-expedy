import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import { Avatar, Heading } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";
import { removeCompanyName } from "../../storage/removeCompanyName";
import { removeAccess_token } from "../../storage/removeAccess_token";

export default function Mais({ navigation }: any) {
  const [companyName, setCompanyName] = useState("");

  async function getCompanyName() {
    const storage: any = await AsyncStorage.getItem(COMPANY_NAME);
    setCompanyName(storage);
  }

  useEffect(() => {
    getCompanyName();
  }, [companyName]);
  return (
    <>
      <View
        style={{
          height: "22%",
          backgroundColor: "#002851",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              maxWidth: "90%",
            }}
          >
            <Avatar bg="white">
              <Text
                style={{
                  color: "black",
                  textTransform: "uppercase",
                  fontSize: 22,
                }}
              >
                {companyName?.split("")[0]}
              </Text>
            </Avatar>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                {companyName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ flexDirection: "row", padding: 10 }}
        >
          <Ionicons name="home-outline" size={20} />
          <Heading fontWeight={400} size={"md"} style={{ paddingLeft: 10 }}>
            Início
          </Heading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pedidos")}
          style={{ flexDirection: "row", padding: 10 }}
        >
          <Ionicons name="cart-outline" size={20} />

          <Heading fontWeight={400} size={"md"} style={{ paddingLeft: 10 }}>
            Pedidos
          </Heading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Listas")}
          style={{ flexDirection: "row", padding: 10 }}
        >
          <Ionicons name="cube-outline" size={20} />

          <Heading fontWeight={400} size={"md"} style={{ paddingLeft: 10 }}>
            Expedição
          </Heading>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            removeAccess_token(),
              removeCompanyName(),
              navigation.navigate("Login");
          }}
          style={{ flexDirection: "row", padding: 10 }}
        >
          <Ionicons name="log-out-outline" size={20} />

          <Heading fontWeight={400} size={"md"} style={{ paddingLeft: 10 }}>
            Sair
          </Heading>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
