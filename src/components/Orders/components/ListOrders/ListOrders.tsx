import { TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";
import { statusHub } from "../../../../Objects/statusHub";
import { Text, View, YStack } from "tamagui";

export default function ListOrders({ navigation, item }: any) {
  return (
    <View theme={"light"}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PedidoId", item.id);
        }}
      >
        <YStack alignItems="center">
          <View
            height={100}
            backgroundColor={"white"}
            borderRadius={5}
            alignItems="center"
            justifyContent={"space-between"}
            marginBottom={12}
            flexDirection="row"
            paddingHorizontal={20}
            paddingVertical={5}
          >
            <View justifyContent="space-evenly" height={"100%"}>
              <View flexDirection="row" justifyContent="space-between">
                <Text>{item.orderid}</Text>
                <Text>
                  {moment(item.date).utc(true).format("DD/MM")}-
                  {moment(item.date).utc(true).format("HH:mm")}
                </Text>
              </View>
              {/* <Divider /> */}
              <View
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width={"100%"}
                paddingRight={20}
                height={70}
              >
                <View
                  justifyContent="space-around"
                  height={"100%"}
                  width={"70%"}
                >
                  <Text>{item.integracao.name}</Text>
                  <Text>{item.Customer.name}</Text>
                </View>
                <View
                  alignItems="center"
                  justifyContent="space-around"
                  height="100%"
                >
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
