import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import {
  Accordion,
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Form,
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
import { useForm } from "react-hook-form";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { UseQueryResult, useQuery } from "react-query";
import { integracoesDisponiveis } from "../../../../objects/integracoesDisponiveis";
import { statusHub } from "../../../../objects/statusHub";

export default function DialogFilters({
  setFilters,
  setValue,
  getValues,
  reset,
  setPage,
}: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );

  function onSubmit() {
    const values = getValues();
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
          <Dialog.Title>Filtrar pedidos</Dialog.Title>
          {/* <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description> */}
          <ScrollView>
            <Form onSubmit={() => onSubmit()}>
              <View>
                <Accordion
                  overflow="hidden"
                  width="100%"
                  type="multiple"
                  gap={10}
                >
                  <Accordion.Item value="a1">
                    <Accordion.Trigger
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      {({ open }: { open: boolean }) => (
                        <>
                          <Paragraph>Integrações</Paragraph>

                          <Square
                            animation="quick"
                            rotate={open ? "180deg" : "0deg"}
                          >
                            <ChevronDown size="$1" />
                          </Square>
                        </>
                      )}
                    </Accordion.Trigger>

                    <Accordion.Content gap={10}>
                      {data?.integracoes.map((integracao: any) => {
                        return (
                          <TouchableOpacity
                            onPress={() =>
                              setValue("fkintegracao", integracao.id)
                            }
                            key={integracao.descricao}
                          >
                            <Paragraph borderRadius={50} padding={5}>
                              {integracao.descricao}
                            </Paragraph>
                          </TouchableOpacity>
                        );
                      })}
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="a2">
                    <Accordion.Trigger
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      {({ open }: any) => (
                        <>
                          <Paragraph>Status Hub</Paragraph>

                          <Square
                            animation="quick"
                            rotate={open ? "180deg" : "0deg"}
                          >
                            <ChevronDown size="$1" />
                          </Square>
                        </>
                      )}
                    </Accordion.Trigger>

                    <Accordion.Content gap={10}>
                      {Object.values(statusHub).map((status: any) => {
                        return (
                          <TouchableOpacity
                            key={status.identifier}
                            onPress={() =>
                              setValue("status_hub", status.identifier)
                            }
                          >
                            <Paragraph padding={5}>{status.name}</Paragraph>
                          </TouchableOpacity>
                        );
                      })}
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              </View>
              <View>
                <Label width={160} justifyContent="flex-end">
                  ID Marketplace
                </Label>
                <Input
                  onChangeText={(e) => setValue("orderid", e)}
                  placeholder="ID marketplace"
                />
              </View>

              <View>
                <Label width={160} justifyContent="flex-end">
                  ID Hub
                </Label>
                <Input
                  onChangeText={(e) => setValue("id", e)}
                  placeholder="Id Hub"
                />
              </View>
              <Form.Trigger asChild>
                <Button>Filtrar</Button>
              </Form.Trigger>
            </Form>
          </ScrollView>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
