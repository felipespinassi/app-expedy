import { Card, CardHeader, CardTitle } from "../../../components/Card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationTypes } from "../../@types/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import { Box, ScrollText } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function ExpedicaoRapida() {
  const navigation = useNavigation<NavigationTypes>();
  return (
    <View
      style={{ flex: 1 }}
      className="bg-background dark:bg-darkBackground pt-5 gap-5 px-2"
    >
      <TouchableOpacity onPress={() => navigation.navigate("Expedir")}>
        <Card className="  h-28 justify-center  ">
          <CardHeader className="w-full flex-row px-10 flex gap-4 ">
            <Box size={28} />
            <CardTitle className=" font-normal">Expedição Rápida</CardTitle>
          </CardHeader>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        className="w-11/12"
        onPress={() => navigation.navigate("ArquivosGerados")}
      >
        <View>
          <Card className=" h-28 justify-center">
            <CardHeader className="w-full px-10 flex flex-row gap-4 ">
              <ScrollText />
              <CardTitle className=" font-normal">Arquivos Gerados</CardTitle>
            </CardHeader>
          </Card>
        </View>
      </TouchableOpacity>
    </View>
  );
}
