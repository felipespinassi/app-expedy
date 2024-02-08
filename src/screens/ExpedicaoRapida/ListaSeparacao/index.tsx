import { View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { X } from '@tamagui/lucide-icons'
import React, { useState } from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { Button, Center, Heading, ScrollView, Spinner, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getService } from "../../../services/getService";
import { useQuery } from "react-query";
import { Adapt, Dialog, Fieldset, Input, Label, Paragraph, Sheet, TooltipSimple, Unspaced, XStack } from "tamagui";

export default function ListaSeparacao(props: any) {
  const [openModal,setOpenModal] = useState(false)
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
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Lista de Picking
        </Heading>
      </View>


      <Dialog modal open={openModal} >
      

      <Adapt when="sm" platform="touch">
        <Sheet animation="quick" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="slow"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
        >
          <Dialog.Title>Selecionar Quantidade</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              Name
            </Label>
            <Input flex={1} id="name" defaultValue="Nate Wienert" />
          </Fieldset>
          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="username">
              <TooltipSimple label="Pick your favorite" placement="bottom-start">
                <Paragraph>Food</Paragraph>
              </TooltipSimple>
            </Label>
          </Fieldset>

          <XStack alignSelf="flex-end" gap="$4">

            <Dialog.Close displayWhenAdapted asChild>
              <Button onPress={() => setOpenModal(false)} aria-label="Close">
                Save changes
              </Button>
            </Dialog.Close>
          </XStack>

          <Unspaced>
          <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>

 


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
                     <Button style={{ backgroundColor: "#002851" }} size={"xs"}>
                      Confirmar todos
                    </Button>
                    <Button onPress={()=> setOpenModal(true)} style={{ backgroundColor: "#002851" }} size={"xs"}>
                      Selecionar quantidade
                    </Button> 
                  </View>
                </Center>
              </VStack>
            );
          })}
        </ScrollView>
      )}

      {/* <View
        style={{
          paddingTop: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => handlePrintFile(item)}>
          <Button style={{ backgroundColor: "#002851" }}>Imprimir Arquivo</Button>
        </TouchableOpacity>
      </View> */}
    </>
  );
}
