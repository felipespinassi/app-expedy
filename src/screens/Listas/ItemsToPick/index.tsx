import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Button, Center, Heading, Input, VStack } from "native-base";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";

export function ItemsToPick({ navigation, route }: any) {
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <ArrowBack navigation={navigation} />
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Itens à separar
        </Heading>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          paddingTop: 40,
          marginHorizontal: 10,
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Heading
            style={{ paddingBottom: 20, textAlign: "center" }}
            size={"xs"}
          >
            {route.params.original_name}
          </Heading>
          <Text style={{ paddingBottom: 20 }}>
            SKU: {route.params.reference}
          </Text>
          <Heading size={"md"}>A separar: {route.params.quantity}</Heading>
        </View>

        <VStack>
          <Center maxWidth={"100%"} padding={20} bg={"light.200"} rounded="md">
            <Heading style={{ paddingBottom: 10 }} size={"sm"}>
              Digite a quantidade
            </Heading>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Input
                backgroundColor={"light.100"}
                placeholder="0"
                fontSize={25}
                w={{
                  base: "35%",
                }}
                keyboardType="numeric"
              />
            </View>
          </Center>
        </VStack>
        <Button
          onPress={() => navigation.goBack()}
          bg={"primary.900"}
          size={"lg"}
          style={{ marginTop: 50 }}
        >
          Confirmar
        </Button>
      </KeyboardAvoidingView>
    </>
  );
}
