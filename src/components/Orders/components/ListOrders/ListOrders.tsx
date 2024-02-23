import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Heading, Divider, Center, VStack } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { statusHub } from "../../../../Objects/statusHub";
import ArrowBack from "../../../ArrowBack/ArrowBack";

export default function ListOrders({ navigation, item }: any) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PedidoId", item.id);
        }}
      >
        <VStack style={{ alignItems: "center" }}>
          <Center
            shadow={1}
            rounded={"md"}
            bg={"light.50"}
            style={{
              height: 120,
              marginBottom: 10,
              maxWidth: 500,
              flexDirection: "row",
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",

                height: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  paddingRight: 20,
                }}
              >
                <Text>{item.orderid}</Text>
                <Text>
                  {moment(item.date).utc(true).format("DD/MM")}-
                  {moment(item.date).utc(true).format("HH:mm")}
                </Text>
              </View>
              <Divider />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingRight: 20,

                  height: 70,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-around",
                    height: "100%",
                    width: "70%",
                  }}
                >
                  <Heading fontWeight={500} size="xs">
                    {item.integracao.name}
                  </Heading>
                  <Text>{item.Customer.name}</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-around",
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
              </View>
            </View>
          </Center>
        </VStack>
      </TouchableOpacity>
    </>
  );
}
