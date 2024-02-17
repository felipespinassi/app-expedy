import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { ListItem, View, YGroup } from "tamagui";

export default function ExpedicaoRapida() {
  const navigation: any = useNavigation();
  return (
    <View flex={1}>
      <View alignItems="center" width={"100%"} marginTop={20} gap={10}>
        <TouchableOpacity onPress={() => navigation.navigate('Expedir')}> 
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
                size={"$6"}
                title="Expedir"
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
                padding={30}
                icon={<Feather name="file-text" size={24} />}
                size={"$6"}
                title="Arquivos Gerados"
              />
            </YGroup.Item>
          </YGroup>
        </TouchableOpacity>
      </View>
    </View>
  );
}
