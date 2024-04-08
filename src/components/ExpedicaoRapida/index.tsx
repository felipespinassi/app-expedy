import { TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { ListItem, YGroup } from "tamagui";
import { NavigationTypes } from "../../@types/NavigationTypes";

export default function ExpedicaoRapida() {
  const navigation = useNavigation<NavigationTypes>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ alignItems: "center", width: "100%", marginTop: 20, gap: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Expedir")}>
          <YGroup
            minWidth={"95%"}
            alignSelf="center"
            bordered
            width={240}
            size="$4"
          >
            <YGroup.Item>
              <ListItem
                padding={30}
                icon={<Feather name="package" size={24} />}
                title="Expedir"
                backgroundColor={"$background075"}
                size={"$7"}
              />
            </YGroup.Item>
          </YGroup>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ArquivosGerados")}
        >
          <YGroup
            minWidth={"95%"}
            alignSelf="center"
            bordered
            width={240}
            size="$4"
          >
            <YGroup.Item>
              <ListItem
                backgroundColor={"$background075"}
                size={"$7"}
                padding={30}
                icon={<Feather name="file-text" size={24} />}
                title="Arquivos Gerados"
              />
            </YGroup.Item>
          </YGroup>
        </TouchableOpacity>
      </View>
    </View>
  );
}
