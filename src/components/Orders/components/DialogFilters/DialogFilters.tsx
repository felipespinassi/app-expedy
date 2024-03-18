import { TouchableOpacity } from "react-native";
import React from "react";
import {
  Accordion,
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Group,
  Input,
  Label,
  ListItem,
  Paragraph,
  ScrollView,
  Select,
  Separator,
  Sheet,
  Square,
  Text,
  View,
  XGroup,
  XStack,
  YGroup,
  YStack,
} from "tamagui";
import { Activity, Airplay, ChevronDown } from "@tamagui/lucide-icons";

export default function DialogFilters() {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text>Filtros</Text>
          <ChevronDown />
        </TouchableOpacity>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
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
          backgroundColor={"white"}
          bordered
          elevate
          key="content"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        >
          <Dialog.Title>Filtrar pedidos</Dialog.Title>
          {/* <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description> */}

          <Fieldset>
            <Label width={160} justifyContent="flex-end" htmlFor="IdMp">
              ID Marketplace
            </Label>
            <Input id="idMp" defaultValue="Nate Wienert" />
          </Fieldset>
          <Fieldset>
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              ID Hub
            </Label>
            <Input id="name" defaultValue="Nate Wienert" />
          </Fieldset>
          <Fieldset>
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              Loja
            </Label>
            <ScrollView>
              <TouchableOpacity>
                <Text>Shopee - Nuance Casa</Text>
                <Text>Mercado Livre - Nuance Casa</Text>
                <Text>Shein - Nuance Casa</Text>
              </TouchableOpacity>
            </ScrollView>
          </Fieldset>

          <XStack alignSelf="flex-end" gap="$4">
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="active" aria-label="Close">
                Save changes
              </Button>
            </Dialog.Close>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
