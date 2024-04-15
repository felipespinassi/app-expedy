import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Button } from "tamagui";
import { statusHub } from "../../../../../../Objects/statusHub";
import { Copy } from "@tamagui/lucide-icons";
import * as Clipboard from "expo-clipboard";

import AntDesign from "react-native-vector-icons/AntDesign";

export default function DataCustomer({ pedido }: any) {
  async function handleCopyToClipboard(text: string) {
    await Clipboard.setStringAsync(String(text));
  }
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "500", fontSize: 20 }}>
          Informações Gerais
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {pedido.erroNota && (
            <TouchableOpacity onPress={() => Alert.alert(pedido.erroNota)}>
              <AntDesign color={"red"} name="exclefile1" size={24} />
            </TouchableOpacity>
          )}

          {pedido.erroEtiqueta && (
            <TouchableOpacity onPress={() => Alert.alert(pedido.erroEtiqueta)}>
              <AntDesign color={"red"} name="filetext1" size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          gap: 15,
        }}
      >
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>ID HUB:</Text>
          <Text style={{ fontSize: 16 }}>{pedido?.id} </Text>
          <TouchableOpacity onPress={() => handleCopyToClipboard(pedido?.id)}>
            <Copy marginLeft={2} color={"black"} size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>ID Marketplace:</Text>
          <Text style={{ fontSize: 16 }}>{pedido?.orderid} </Text>
          <TouchableOpacity
            onPress={() => handleCopyToClipboard(pedido?.orderid)}
          >
            <Copy marginLeft={2} color={"black"} size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Frete:</Text>
          <Text style={{ fontSize: 16 }}>{pedido?.shipment_value}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Loja:</Text>
          <Text style={{ fontSize: 16 }}>{pedido?.integracao.name}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Data :</Text>
          <Text style={{ fontSize: 16 }}>{pedido.date}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Status Hub :</Text>
          {statusHub[pedido.status_hub]?.box}
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>
            Status Marketplace :
          </Text>
          <Text style={{ fontSize: 16 }}>{pedido.status}</Text>
        </View>
      </View>

      <Text style={{ fontWeight: "500", fontSize: 20 }}>
        Informações do Cliente
      </Text>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>Name: </Text>
          <Text style={{ fontSize: 16 }}>{pedido.Customer.name}</Text>
        </View>
        {pedido?.Customer.CustomerAddresses.map((element: any) => {
          return (
            <View key={element} style={{ gap: 15 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Logradouro:</Text>
                <Text style={{ fontSize: 16 }}>
                  {element.CustomerAddress.address}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Número:</Text>
                <Text style={{ fontSize: 16 }}>
                  {element.CustomerAddress.number}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>Bairro:</Text>
                <Text style={{ fontSize: 16 }}>
                  {element.CustomerAddress.neighborhood}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>
                  Cidade/Estado:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  {element.CustomerAddress.city}/{element.CustomerAddress.state}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>CEP:</Text>
                <Text style={{ fontSize: 16 }}>
                  {element.CustomerAddress.zip_code}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "gray", fontSize: 16 }}>
                  Valor Total:
                </Text>
                <Text style={{ fontSize: 16 }}>R${pedido?.total}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <TouchableOpacity style={{ marginVertical: 20 }}>
        <Button color={"#fff"} backgroundColor={"#1890ff"}>
          Atualizar informações
        </Button>
      </TouchableOpacity>
      <View
        style={{
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Itens do Pedido</Text>
        {pedido?.ProductsSold.map((element: any) => {
          const key = element.ProductsSold.product_id;
          return (
            <View
              key={key}
              style={{
                gap: 5,
                marginBottom: 10,
                backgroundColor: "white",
                padding: 20,

                borderRadius: 10,
              }}
            >
              <Text>
                <Text style={{ color: "gray", fontSize: 16 }}>SKU:</Text>
                {element.ProductsSold.reference}
              </Text>

              <Text>
                <Text style={{ color: "gray", fontSize: 16 }}>Descrição:</Text>
                {element.ProductsSold.original_name}
              </Text>
              <Text>
                <Text style={{ color: "gray", fontSize: 16 }}>Quantidade:</Text>
                {element.ProductsSold.quantity}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
