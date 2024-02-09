import { View, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { X } from "@tamagui/lucide-icons";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  H5,
  Heading,
  Input,
  Label,
  ScrollView,
  Sheet,
  Text,
  Unspaced,
  XStack,
} from "tamagui";
import { Center, Spinner, VStack } from "native-base";
import { getService } from "../../../../services/getService";
import ArrowBack from "../../../ArrowBack/ArrowBack";

export default function ListaSeparacao({file}: any) {
  const [openModal, setOpenModal] = useState(false);
  const produtoRef = useRef({} as any)


  const navigation: any = useNavigation();
  const {
    data: response,
    isLoading,
    refetch,
    isFetching,
  }: any = useQuery(
    "OrderComplete",
    async () => await getService(`orders/file/picking/${file}`, {})
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

          {response?.data.produtos?.map((produto: any, index: any) => {

            return (
              <TouchableOpacity onPress={() => { setOpenModal(true), produtoRef.current = produto }}>

                <VStack  style={{ paddingHorizontal: 5 }}>
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
                      key={produto.reference}
                      style={{
                        height: 90,
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        paddingLeft: 20
                      }}
                    >
                      <Text style={{ width: "20%" }} fontSize={'$6'} color={'$background'}> {produto.quantity}</Text>

                      <View style={{ width: "80%", gap: 7 }}>
                        <Text fontSize={'$4'} color={'$background'}><Text color={'$gray10'} >SKU: </Text>{produto.reference}</Text>
                        <Text fontSize={'$4'} color={'$background'}  ><Text color={'$gray10'} >Descricao: </Text>  {produto.database_name}</Text>

                      </View>
                    </View>


                  </Center>
                </VStack>
              </TouchableOpacity>

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
                <Dialog.Title textAlign='center' size={'$7'}>{produtoRef.current.database_name}</Dialog.Title>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Dialog.Description>
                  <H5 style={{ color: "white" }}> </H5>
                </Dialog.Description>
              </View>
              <Fieldset gap="$4">
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <H5>SKU:{produtoRef.current.reference}</H5>
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
