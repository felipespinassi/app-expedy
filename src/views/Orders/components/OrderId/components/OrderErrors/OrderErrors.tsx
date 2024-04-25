import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

export default function OrderErrors({ pedido, setOpenModalErroNota }: any) {
  return (
    <View style={{ gap: 10 }}>
      {pedido.erroNota && (
        <TouchableOpacity
          onPress={() => setOpenModalErroNota(true)}
          style={{
            backgroundColor: "#f4d2d7",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ec5353",
          }}
        >
          <View>
            <Text>Pedido com erro na nota fiscal, clique para ver.</Text>
          </View>
        </TouchableOpacity>
      )}
      {pedido.erroEtiqueta && (
        <TouchableOpacity
          style={{
            backgroundColor: "#f4d2d7",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ec5353",
          }}
          onPress={() => Alert.alert(pedido.erroEtiqueta)}
        >
          <View>
            <Text> Pedido com erro na etiqueta, clique para ver.</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
