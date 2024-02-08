import { View, Text, Alert } from "react-native";
import { X } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import { getService } from "../../../services/getService";
import { useQuery } from "react-query";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  H4,
  H5,
  Heading,
  Input,
  Label,
  Paragraph,
  ScrollView,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
} from "tamagui";
import { Center, Spinner, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListaSeparacao(props: any) {
  const [openModal, setOpenModal] = useState(false);
  const item = props.route.params;
  const navigation: any = useNavigation();
  const {
    data: response,
    isLoading,
    refetch,
    isFetching,
  }: any = useQuery(
    "OrderComplete",
    async () => await getService(`orders/file/picking/${item}`, {})
  );

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
        <Heading color={"white"}>Lista de Picking</Heading>
      </View>

      {isFetching ? (
        <Spinner />
      ) : (
        <ScrollView style={{ paddingTop: 5 }}>
          {response?.data.produtos.map((produto: any, index: any) => {
            return (
              <VStack key={index} style={{ paddingHorizontal: 5 }}>
                <Center
                  shadow={1}
                  rounded={"md"}
                  bg={"light.50"}
                  style={{
                    marginBottom: 10,
                    paddingBottom: 10,
                  }}
                >
                  <View
                    key={index}
                    style={{
                      height: 80,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      padding: 10,
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Text>{produto.reference}</Text>
                    <Text style={{ width: "40%" }}>{produto.database_name}</Text>
                    <Text>{produto.quantity}</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}
                  >
                    <Button>Confirmar todos</Button>
                    <Button onPress={() => setOpenModal(true)}> Selecionar quantidade</Button>
                  </View>
                </Center>
              </VStack>
            );
          })}
        </ScrollView>
      )}
      <Dialog onOpenChange={() => setOpenModal(false)} modal open={openModal}>
        <Adapt when="sm" platform="touch">
          <Sheet zIndex={200000} modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4" gap="$4">
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={["transform", "opacity"]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Dialog.Title>Selecionar Quantidade</Dialog.Title>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Dialog.Description>
                <Heading style={{ color: "white" }}>Produto teste 123456</Heading>
              </Dialog.Description>
            </View>
            <Fieldset gap="$4">
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <H5>SKU:tete</H5>
              </View>
            </Fieldset>

            <Fieldset gap="$4">
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Label justifyContent="flex-end" htmlFor="quantity">
                  Digite a quantidade
                </Label>
                <Input id="quantity" />
              </View>
            </Fieldset>

            <XStack alignItems={"center"} justifyContent="center" gap="$4">
              <Dialog.Close displayWhenAdapted asChild>
                <Button onPress={() => setOpenModal(false)} aria-label="Close">
                  Confirmar
                </Button>
              </Dialog.Close>
            </XStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button position="absolute" top="$3" right="$3" />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>
  );
}
