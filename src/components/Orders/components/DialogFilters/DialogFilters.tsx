import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Adapt, Button, Dialog, Form, Input, Sheet } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import { FieldValues, UseFormReturn } from "react-hook-form";
import SelectIntegracores from "./components/SelectIntegracoes/SelectIntegracores";
import SelectStatusHub from "./components/SelectStatusHub/SelectStatusHub";

interface Props {
  setFilters: Dispatch<SetStateAction<{}>>;
  form: UseFormReturn<FieldValues, any, undefined>;
  filters: {};
  setPage: any;
}

export default function DialogFilters({
  setFilters,
  form,
  setPage,
  filters,
}: Props) {
  function onFinish() {
    const values = form.getValues();
    setFilters(values);
    setPage(1);
  }

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Filtros</Text>
          <ChevronDown />
        </TouchableOpacity>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal disableDrag>
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
          enterStyle={{ x: 0, y: 20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        >
          <Dialog.Close displayWhenAdapted asChild>
            <Button
              onPress={() => onFinish()}
              theme={"blue_active"}
              backgroundColor={"#1890ff"}
              color={"white"}
            >
              Filtrar
            </Button>
          </Dialog.Close>

          <ScrollView>
            <Form onSubmit={onFinish}>
              <View style={{ padding: 10, gap: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: "500" }}>ID HUB</Text>
                <Input
                  onChangeText={(e) => form.setValue("id", e)}
                  placeholder="Digite o ID HUB"
                />

                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  ID Marketplace
                </Text>

                <Input
                  onChangeText={(e) => form.setValue("orderid", e)}
                  placeholder="Digite o ID Marketplace"
                />

                <SelectIntegracores filters={filters} form={form} />

                <SelectStatusHub form={form} />
              </View>
            </Form>
          </ScrollView>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
