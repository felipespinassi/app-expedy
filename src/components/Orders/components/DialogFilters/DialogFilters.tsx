import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Adapt, Button, Dialog, Sheet } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { UseQueryResult, useQuery } from "react-query";
import { statusHub } from "../../../../Objects/statusHub";
import Checkbox from "../../../Checkbox/Checkbox";

export default function DialogFilters({
  setFilters,
  // form,
  // setPage,
  filters,
}: any) {
  const { data, isFetching, isLoading }: UseQueryResult<any> = useQuery(
    "Integracoes",
    async () => await fetcher(`${config.baseURL}front/integracoes`, {})
  );

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

          <Dialog.Close displayWhenAdapted asChild>
            <Button
              theme={"blue_active"}
              backgroundColor={"#1890ff"}
              color={"white"}
            >
              Feito
            </Button>
          </Dialog.Close>

          <ScrollView>
            <View style={{ padding: 10, gap: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: "500" }}>
                Integrações
              </Text>
              {data?.integracoes.map((integracao: any) => {
                return (
                  <TouchableOpacity
                    key={integracao.descricao}
                    onPress={() => {
                      setFilters({ ...filters, fkintegracao: integracao.id });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight: 25,
                      }}
                    >
                      <Text>{integracao.descricao}</Text>
                      <Checkbox
                        value1={filters.fkintegracao}
                        value2={integracao.id}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}

              <View style={{ borderWidth: 0.5 }} />

              <Text style={{ fontSize: 22, fontWeight: "500" }}>
                Status Hub
              </Text>
              {Object.values(statusHub).map((status: any) => {
                return (
                  <TouchableOpacity
                    key={status.id}
                    onPress={() => {
                      setFilters({
                        ...filters,
                        status_hub: status.identifier,
                      });
                    }}
                  >
                    <View
                      style={{
                        paddingRight: 25,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ padding: 5 }}>{status.name}</Text>
                      <Checkbox
                        value1={filters.status_hub}
                        value2={status.identifier}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
