import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, FlatList, View } from "native-base";
import { getService } from "../../services/getService";
import { Heading } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useQuery } from "react-query";
import { statusHub } from "../../Objects/statusHub";
import { OrderSkelleton } from "../../components/OrderSkelleton/OrderSkelleton";
import moment from "moment-timezone";

export default function Orders({ navigation }: any) {
  const { data, isLoading, refetch }: any = useQuery(
    "Orders",
    async () => await getService("front/orders/simples", { pageSize: 100 })
  );
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          justifyContent: "flex-start",
          width: "90%",
          flexDirection: "row",
          paddingVertical: 10,
        }}
      >
        <Text>Filtros</Text>
        <AntDesign name="filter" size={22} />
      </TouchableOpacity>
      {!isLoading ? (
        <View style={{ alignItems: "center" }}>
          <FlatList
            refreshing={isLoading}
            onRefresh={() => refetch()}
            showsVerticalScrollIndicator={false}
            style={{ width: "90%" }}
            data={data?.data?.pedidos}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PedidoId", item.id);
                }}
              >
                <View
                  style={{
                    height: 120,
                    marginBottom: 5,
                    padding: 5,
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "space-around",
                      width: 210,
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
                        <AntDesign
                          color={"green"}
                          name="exclefile1"
                          size={22}
                        />
                      )}
                      {item.etiqueta && !item.erroEtiqueta && (
                        <AntDesign color={"green"} name="filetext1" size={22} />
                      )}
                    </View>
                  </View>
                </View>
                <Divider />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <OrderSkelleton />
      )}
    </View>
  );
}
