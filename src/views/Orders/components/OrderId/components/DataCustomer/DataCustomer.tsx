import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DataCustomer({ pedido }: any) {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Text
        className="text-foreground dark:text-darkForeground"
        style={{ fontWeight: "500", fontSize: 20 }}
      >
        Informações do Cliente
      </Text>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          gap: 10,
        }}
        className="bg-muted dark:bg-darkMuted"
      >
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Name: </Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido.Customer.name}
          </Text>
        </View>
        {pedido?.Customer.CustomerAddresses.map((element: any) => {
          return (
            <View key={element} style={{ gap: 15 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Logradouro:</Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  {element.CustomerAddress.address}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Número:</Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  {element.CustomerAddress.number}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Bairro:</Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  {element.CustomerAddress.neighborhood}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>
                  Cidade/Estado:
                </Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  {element.CustomerAddress.city}/{element.CustomerAddress.state}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>CEP:</Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  {element.CustomerAddress.zip_code}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>
                  Valor Total:
                </Text>
                <Text
                  className="text-foreground dark:text-darkForeground"
                  style={{ fontSize: 16 }}
                >
                  R${pedido?.total}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
