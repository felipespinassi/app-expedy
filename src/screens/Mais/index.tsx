import { TouchableOpacity } from "react-native";

import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";
import { removeCompanyName } from "../../storage/removeCompanyName";
import { removeAccess_token } from "../../storage/removeAccess_token";
import { Avatar, ScrollView, Text, View } from "tamagui";

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
            <Avatar borderRadius={50} bg="white">
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
      <ScrollView theme={"light"} style={{ paddingHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} w={"100%"} style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="home-outline" size={26} />
              <Text fontSize={20} style={{ paddingLeft: 10 }}>
                Início
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pedidos")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} w={"100%"} style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="cart-outline" size={26} />

              <Text fontSize={20} style={{ paddingLeft: 10 }}>
                Pedidos
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Expedicao")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} w={"100%"} style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="cube-outline" size={26} />

              <Text fontSize={20} style={{ paddingLeft: 10 }}>
                Expedição
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            removeAccess_token(),
              removeCompanyName(),
              navigation.navigate("Login");
          }}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} w={"100%"} style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="log-out-outline" size={26} />

              <Text fontSize={20} style={{ paddingLeft: 10 }}>
                Sair
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
