import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Clipboard from "expo-clipboard";
import { statusHub } from "../../../../../../objects/statusHub";
import { Copy } from "lucide-react-native";

export default function DataGeneral({ pedido }: any) {
  async function handleCopyToClipboard(text: string) {
    await Clipboard.setStringAsync(String(text));
  }
  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          className="text-foreground dark:text-darkForeground"
          style={{ fontWeight: "500", fontSize: 20 }}
        >
          Informações Gerais
        </Text>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          gap: 15,
        }}
        className="bg-muted dark:bg-darkMuted"
      >
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>ID HUB:</Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido?.id}
          </Text>
          <TouchableOpacity onPress={() => handleCopyToClipboard(pedido?.id)}>
            <Copy color={"black"} size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>ID Marketplace:</Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido?.orderid}
          </Text>
          <TouchableOpacity
            onPress={() => handleCopyToClipboard(pedido?.orderid)}
          >
            <Copy color={"black"} size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Frete:</Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido?.shipment_value}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Loja:</Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido?.integracao.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Data :</Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido.date}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Status Hub :</Text>
          {statusHub[pedido.status_hub]?.box}
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>
            Status Marketplace :
          </Text>
          <Text
            className="text-foreground dark:text-darkForeground"
            style={{ fontSize: 16 }}
          >
            {pedido.status}
          </Text>
        </View>
      </View>
    </View>
  );
}
