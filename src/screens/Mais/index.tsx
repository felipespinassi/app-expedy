import { TouchableOpacity } from "react-native";

import React, { useState, useEffect, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANY_NAME } from "../../storage/storageConfig";
import { removeCompanyName } from "../../storage/removeCompanyName";
import { removeAccess_token } from "../../storage/removeAccess_token";
import { Avatar, ScrollView, Text, View } from "tamagui";
import { AuthContext } from "../../context/AuthContext";

export default function Mais({ navigation }: any) {
  const [companyName, setCompanyName] = useState("");

  const { setIsLogged } = useContext(AuthContext);
  async function getCompanyName() {
    const storage: any = await AsyncStorage.getItem(COMPANY_NAME);
    setCompanyName(storage);
  }

  useEffect(() => {
    getCompanyName();
  }, [companyName]);
  return (
    <>
      <View height={"22%"} backgroundColor={"#002851"} flexDirection="row">
        <View flexDirection="row" alignItems="flex-end" paddingLeft={20}>
          <View
            flexDirection="row"
            alignItems="center"
            marginBottom={20}
            maxWidth={"90%"}
          >
            <Avatar borderRadius={50} bg="white">
              <Text color={"black"} textTransform="uppercase" fontSize={22}>
                {companyName?.split("")[0]}
              </Text>
            </Avatar>
            <View>
              <Text color={"white"} fontSize={20} marginLeft={10}>
                {companyName}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView theme={"light"} paddingHorizontal={15}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} width={"100%"} justifyContent="center">
            <View flexDirection="row" alignItems="center">
              <Ionicons name="home-outline" size={26} />
              <Text fontSize={20} paddingLeft={10}>
                Início
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pedidos")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} width={"100%"} justifyContent="center">
            <View flexDirection="row" alignItems="center">
              <Ionicons name="cart-outline" size={26} />

              <Text paddingLeft={10} fontSize={20}>
                Pedidos
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Expedicao")}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View justifyContent="center" height={40} width={"100%"}>
            <View flexDirection="row" alignItems="center">
              <Ionicons name="cube-outline" size={26} />

              <Text paddingLeft={10} fontSize={20}>
                Expedição
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            removeAccess_token(), removeCompanyName(), setIsLogged(false);
          }}
          style={{ flexDirection: "row", padding: 5 }}
        >
          <View height={40} w={"100%"} justifyContent="center">
            <View flexDirection="row" alignItems="center">
              <Ionicons name="log-out-outline" size={26} />

              <Text fontSize={20} paddingLeft={10}>
                Sair
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
