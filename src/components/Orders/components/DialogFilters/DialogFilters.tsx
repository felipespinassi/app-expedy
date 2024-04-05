import { TouchableOpacity } from "react-native";
import React from "react";
import {
  Accordion,
  Adapt,
  Button,
  Checkbox,
  Dialog,
  Form,
  Input,
  Label,
  Paragraph,
  ScrollView,
  Sheet,
  Square,
  Text,
  View,
} from "tamagui";
import { Check, ChevronDown } from "@tamagui/lucide-icons";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { UseQueryResult, useQuery } from "react-query";
import { statusHub } from "../../../../objects/statusHub";
import { RadioGroup } from "tamagui";

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
          <Form onSubmit={() => onSubmit()} gap={10}>
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

                    <Accordion.Content>
                      <RadioGroup
                        gap={15}
                        value={filters?.fkintegracao}
                        onValueChange={(integracaoId) =>
                          setValue("fkintegracao", integracaoId)
                        }
                      >
                        {data?.integracoes.map((integracao: any) => {
                          return (
                            <View
                              backgroundColor={"$white3"}
                              key={integracao.descricao}
                              flexDirection="row"
                              justifyContent="space-between"
                              padding={20}
                              paddingRight={25}
                              borderRadius={10}
                            >
                              <Text>{integracao.descricao}</Text>
                              <RadioGroup.Item
                                size={"$5"}
                                backgroundColor={"white"}
                                value={integracao.id}
                              >
                                <RadioGroup.Indicator
                                  backgroundColor={"#1890ff"}
                                />
                              </RadioGroup.Item>
                            </View>
                          );
                        })}
                      </RadioGroup>
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
                      <RadioGroup
                        gap={15}
                        value={filters?.status_hub}
                        onValueChange={(statusIdentifier) =>
                          setValue("status_hub", statusIdentifier)
                        }
                      >
                        {Object.values(statusHub).map((status: any) => {
                          return (
                            <View
                              key={status.id}
                              backgroundColor={"$white3"}
                              padding={20}
                              paddingRight={25}
                              flexDirection="row"
                              justifyContent="space-between"
                              borderRadius={10}
                            >
                              <Text padding={5}>{status.name}</Text>
                              <RadioGroup.Item
                                size={"$5"}
                                backgroundColor={"white"}
                                value={status.identifier}
                              >
                                <RadioGroup.Indicator
                                  backgroundColor={"#1890ff"}
                                />
                              </RadioGroup.Item>
                            </View>
                          );
                        })}
                      </RadioGroup>
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
