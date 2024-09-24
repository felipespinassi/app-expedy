import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "../../@types/NavigationTypes";
import { Card, CardHeader, CardTitle } from "../../../components/Card";
import { Box, ScrollText } from "lucide-react-native";

export default function ExpedicaoRapida() {
  const navigation = useNavigation<NavigationTypes>();
  return (
    <View style={{ flex: 1 }} className="bg-background dark:bg-darkBackground">
      <View
        style={{ alignItems: "center", width: "100%", marginTop: 20, gap: 20 }}
      >
        <TouchableOpacity
          className="w-11/12"
          onPress={() => navigation.navigate("Expedir")}
        >
          <Card className="bg-background dark:bg-darkBackground   h-28 justify-center ">
            <CardHeader className="w-full flex-row px-10 flex gap-4">
              <Box size={28} />
              <CardTitle className="text-foreground dark:text-darkForeground font-normal">
                Expedição Rápida
              </CardTitle>
            </CardHeader>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-11/12"
          onPress={() => navigation.navigate("ArquivosGerados")}
        >
          <View>
            <Card className="bg-background dark:bg-darkBackground  h-28 justify-center">
              <CardHeader className="w-full px-10 flex flex-row gap-4 ">
                <ScrollText />
                <CardTitle className="text-foreground dark:text-darkForeground font-normal">
                  Arquivos Gerados
                </CardTitle>
              </CardHeader>
            </Card>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
