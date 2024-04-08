import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Accordion,
  Adapt,
  Button,
  Dialog,
  Form,
  Input,
  Label,
  Paragraph,
  Sheet,
  Square,
} from "tamagui";
import { Check, ChevronDown } from "@tamagui/lucide-icons";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { UseQueryResult, useQuery } from "react-query";
import { statusHub } from "../../../../Objects/statusHub";
import { RadioGroup } from "tamagui";
import Checkbox from "../../../Checkbox/Checkbox";

export default function DialogFilters({
  setFilters,
  setValue,
  getValues,
  setPage,
  filters,
}: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );

  const [integrationSelected, setIntegrationSelected] = useState("");
  const [statusHubSelected, setStatusHubSelected] = useState();

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
          <Form onSubmit={() => onSubmit()} gap={20}>
            <Dialog.Title>Filtrar pedidos</Dialog.Title>

            <Form.Trigger asChild>
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  theme={"blue_active"}
                  backgroundColor={"#1890ff"}
                  color={"white"}
                >
                  Filtrar
                </Button>
              </Dialog.Close>
            </Form.Trigger>

            <Button>Limpar Filtros</Button>

            <ScrollView>
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
                          <Paragraph>
                            Integração{" "}
                            {integrationSelected ? (
                              `- ${integrationSelected}`
                            ) : (
                              <></>
                            )}
                          </Paragraph>

                          <Square
                            animation="quick"
                            rotate={open ? "180deg" : "0deg"}
                          >
                            <ChevronDown size="$1" />
                          </Square>
                        </>
                      )}
                    </Accordion.Trigger>

                    <Accordion.Content
                      backgroundColor={"$white3"}
                      width={"100%"}
                    >
                      {data?.integracoes.map((integracao: any) => {
                        return (
                          <TouchableOpacity
                            key={integracao.descricao}
                            onPress={() => {
                              setIntegrationSelected(integracao.descricao),
                                setValue("fkintegracao", integracao.id);
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                                paddingRight: 25,
                              }}
                            >
                              <Text>{integracao.descricao}</Text>
                              <Checkbox
                                value1={integrationSelected}
                                value2={integracao.descricao}
                              />
                            </View>
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
                          <Paragraph>
                            Status Hub{" "}
                            {statusHubSelected ? (
                              `- ${statusHubSelected}`
                            ) : (
                              <></>
                            )}
                          </Paragraph>

                          <Square
                            animation="quick"
                            rotate={open ? "180deg" : "0deg"}
                          >
                            <ChevronDown size="$1" />
                          </Square>
                        </>
                      )}
                    </Accordion.Trigger>

                    <Accordion.Content backgroundColor={"$white3"} gap={10}>
                      {Object.values(statusHub).map((status: any) => {
                        return (
                          <TouchableOpacity
                            key={status.id}
                            onPress={() => {
                              setStatusHubSelected(status.name),
                                setValue("status_hub", status.identifier);
                            }}
                          >
                            <View
                              style={{
                                padding: 10,
                                paddingRight: 25,
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Text style={{ padding: 5 }}>{status.name}</Text>
                              <Checkbox
                                value1={statusHubSelected}
                                value2={status.name}
                              />
                            </View>
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
            </ScrollView>
          </Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
