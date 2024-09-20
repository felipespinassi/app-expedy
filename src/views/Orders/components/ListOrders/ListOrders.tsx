import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";
import { statusHub } from "../../../../objects/statusHub";
import { YStack } from "tamagui";
import { marketplaces } from "../../utils/marketplaces";
import { OrdersTypes } from "../../../../@types/OrdersTypes";

interface Props {
  navigation: any;
  item: OrdersTypes;

  onLongPress: (item: OrdersTypes) => void;
  selected: boolean;
  selectedOrders: number[];
}

export default function ListOrders({
  navigation,
  item,
  onLongPress,
  selected,
  selectedOrders,
}: Props) {
  return (
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
          style={{
            backgroundColor: "white",
            height: 100,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
            paddingLeft: selected ? 20 : 0,
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              width: 5,
              height: "100%",
              backgroundColor: marketplaces[item?.integracao?.tipo]?.color,
            }}
          />
          <View
            style={{
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              padding: 10,
              justifyContent: "space-evenly",
              height: "100%",
              backgroundColor: `${selected ? "#e6f7ff" : "white"}`,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                paddingRight: 20,
                height: 90,
              }}
            >
              <View
                style={{
                  justifyContent: "space-around",
                  height: "100%",
                  width: "65%",
                }}
              >
                <Text>{item.orderid}</Text>

                <Text>{item.integracao.name}</Text>
                <Text>{item.Customer.name}</Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                <Text>
                  {moment(item.date).utc(true).format("DD/MM")}-
                  {moment(item.date).utc(true).format("HH:mm")}
                </Text>
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
        </View>
      </YStack>
    </TouchableOpacity>
  );
}
