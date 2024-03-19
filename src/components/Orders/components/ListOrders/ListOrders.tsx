import { TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";
import { statusHub } from "../../../../objects/statusHub";
import { Text, View, YStack } from "tamagui";

export default function ListOrders({
  navigation,
  item,
  onLongPress,
  selected,
  selectedOrders,
}: any) {
  return (
    <View theme={"light"}>
      <TouchableOpacity
        onLongPress={() => onLongPress(item)}
        onPress={() => {
          if (selectedOrders.length) {
            return onLongPress(item);
          }
          navigation.navigate("PedidoId", item.id);
        }}
      >
        <YStack alignItems="center">
          <View
            height={100}
            backgroundColor={`${selected ? "$green5Light" : "white"}`}
            borderRadius={5}
            alignItems="center"
            justifyContent={"space-between"}
            marginBottom={12}
            flexDirection="row"
          >
            <View paddingLeft={5} height={"100%"} backgroundColor={"orange"} />
            <View padding={10} justifyContent="space-evenly" height={"100%"}>
              <View
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                width={"100%"}
                paddingRight={20}
                height={90}
              >
                <View
                  justifyContent="space-around"
                  height={"100%"}
                  width={"70%"}
                >
                  <Text>{item.orderid}</Text>

                  <Text>{item.integracao.name}</Text>
                  <Text>{item.Customer.name}</Text>
                </View>

                <View
                  alignItems="center"
                  justifyContent="space-around"
                  height="100%"
                >
                  <Text>
                    {moment(item.date).utc(true).format("DD/MM")}-
                    {moment(item.date).utc(true).format("HH:mm")}
                  </Text>
                  {statusHub[item.status_hub]?.box}

                  <View flexDirection="row">
                    {item.erroNota && (
                      <AntDesign color={"red"} name="exclefile1" size={22} />
                    )}
                    {item.erroEtiqueta && (
                      <AntDesign color={"red"} name="filetext1" size={22} />
                    )}
                    {item.statusNota && !item.erroNota && (
                      <AntDesign color={"green"} name="exclefile1" size={22} />
                    )}
                    {item.etiqueta && !item.erroEtiqueta && (
                      <AntDesign color={"green"} name="filetext1" size={22} />
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </YStack>
      </TouchableOpacity>
    </View>
  );
}
