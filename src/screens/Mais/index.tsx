import { ScrollView, Text, TouchableOpacity } from "react-native";

import React, { useState, useEffect, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";
import { removeCompanyName } from "../../storage/removeCompanyName";
import { removeAccess_token } from "../../storage/removeAccess_token";
import { AuthContext } from "../../context/AuthContext";
import { View } from "react-native";
import { Avatar } from "../../../components/Avatar";
import { ModeToggle } from "../../components/ToogleTheme";
import { Box, Home, LogOut, ShoppingCart, SunMoon } from "lucide-react-native";

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
      icon: <Home color="#3b82f6" size={26} />,
      action: () => navigation.navigate("Home"),
    },
    {
      name: "Pedidos",
      icon: <ShoppingCart color="#3b82f6" size={26} />,
      action: () => navigation.navigate("Pedidos"),
    },
    {
      name: "Expedição",
      icon: <Box color="#3b82f6" size={26} />,
      action: () => navigation.navigate("Expedição"),
    },
    {
      name: "Sair",
      icon: <LogOut color="#3b82f6" size={26} />,
      action: () => {
        removeAccess_token(), removeCompanyName(), setIsLogged(false);
      },
    },
    {
      name: <ModeToggle />,
      icon: <SunMoon size={30} />,
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
            <Avatar className="bg-white justify-center items-center h-12 w-12">
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
      <ScrollView
        style={{ paddingHorizontal: 15, gap: 30 }}
        className="bg-background dark:bg-darkBackground"
      >
        {values.map((element, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={element.action}
              style={{
                flexDirection: "row",
                padding: 5,
              }}
            >
              <View
                style={{ height: 40, width: "100%", justifyContent: "center" }}
                className="text-foreground dark:text-darkForeground"
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  {element.icon}
                  <Text
                    style={{ fontSize: 20 }}
                    className="text-foreground dark:text-darkForeground"
                  >
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
