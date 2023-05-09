import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN, COMPANY_NAME } from "../../storage/storageConfig";
import { Avatar, Image, Text, View } from "native-base";
import { removeAccess_token } from "../../storage/removeAccess_token";
import { removeCompanyName } from "../../storage/removeCompanyName";

export function CustomDrawer(props: any) {
  const [companyName, setCompanyName] = useState("");
  async function getCompanyName() {
    const storage: any = await AsyncStorage.getItem(COMPANY_NAME);
    setCompanyName(storage);
  }
  useEffect(() => {
    getCompanyName();
  }, [companyName]);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
          <Avatar bg="primary.900">{companyName?.split("")[0]}</Avatar>
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text fontSize={"md"}>{companyName}</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ paddingLeft: 20, paddingBottom: 50 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            props.navigation.navigate("Login"),
              removeAccess_token(),
              removeCompanyName();
          }}
        >
          <Ionicons name="log-out-outline" size={22} />
          <Text style={{ paddingLeft: 30 }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
