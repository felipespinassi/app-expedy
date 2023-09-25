import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Heading, Divider, Center, VStack } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { statusHub } from "../../../../Objects/statusHub";

export default function ListOrders({ navigation, item }: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PedidoId", item.id);
      }}
    >
      <VStack>
        <Center
          shadow={1}
          rounded={"md"}
          bg={"light.50"}
          style={{
            height: 120,
            marginBottom: 10,
            padding: 5,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              width: 210,
              height: "100%",
              marginLeft: 5,
            }}
          >
            <Heading fontWeight={500} size="xs">
              {item.integracao.name}
            </Heading>
            <Text>
              Data:
              {moment(item.date).utc(true).format("DD/MM/YYYY")}:
              {moment(item.date).utc(true).format("HH:mm")}
            </Text>

            <Text>{item.Customer.name}</Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: 150,
              height: "100%",
            }}
          >
            {statusHub[item.status_hub]?.box}
            <View style={{ flexDirection: "row" }}>
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
        </Center>
      </VStack>
    </TouchableOpacity>
  );
}
