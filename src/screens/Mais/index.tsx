import { ScrollView, Text, TouchableOpacity } from "react-native";

import React, { useState, useEffect, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";
import { removeCompanyName } from "../../storage/removeCompanyName";
import { removeAccess_token } from "../../storage/removeAccess_token";
import { Avatar } from "tamagui";
import { AuthContext } from "../../context/AuthContext";
import { View } from "react-native";

export default function Mais({ navigation }: any) {
  const [companyName, setCompanyName] = useState("");

  const { setIsLogged } = useContext(AuthContext);

  async function getCompanyName() {
    const storage: any = await AsyncStorage.getItem(COMPANY_NAME);
    setCompanyName(storage);
  }

  useEffect(() => {
    getCompanyName();
  }, []);

  const values = [
    {
      name: "Início",
      icon: <Ionicons name="home-outline" size={26} />,
      action: () => navigation.navigate("Home"),
    },
    {
      name: "Pedidos",
      icon: <Ionicons name="cart-outline" size={26} />,
      action: () => navigation.navigate("Pedidos"),
    },
    {
      name: "Expedição",
      icon: <Ionicons name="cube-outline" size={26} />,
      action: () => navigation.navigate("Expedição"),
    },
    {
      name: "Sair",
      icon: <Ionicons name="log-out-outline" size={26} />,
      action: () => {
        removeAccess_token(), removeCompanyName(), setIsLogged(false);
      },
    },
  ];
  return (
    <>
      <View
        style={{
          height: 150,
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
              <Text style={{ textTransform: "uppercase", fontSize: 22 }}>
                {companyName?.split("")[0]}
              </Text>
            </Avatar>
            <View>
              <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
                {companyName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 15, gap: 20 }}>
        {values.map((element) => {
          return (
            <TouchableOpacity
              key={element.name}
              onPress={element.action}
              style={{
                flexDirection: "row",
                padding: 5,
              }}
            >
              <View
                style={{ height: 40, width: "100%", justifyContent: "center" }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {element.icon}
                  <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                    {element.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
}
