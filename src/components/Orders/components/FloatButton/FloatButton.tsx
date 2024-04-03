import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Plus } from "@tamagui/lucide-icons";
import { Spinner, Text, View } from "tamagui";
import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { Toast, useToastController } from "@tamagui/toast";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";

export default function FloatButton({
  selectedOrders,
  setSelectedOrders,
  fetchData,
}: any) {
  const [open, setOpen] = useState(false);
  const toast = useToastController();
  const [loading, setLoading] = useState(false);
  async function onSendInvoices() {
    const token = await getAccess_token();
    try {
      const response = await fetcher(
        `${config.baseURL}faturador?faturador=apiFiscal&tipo=danfe&access_token=${token}`,
        {
          method: "POST",
          body: JSON.stringify({ pedidoId: selectedOrders }),
        }
      );
      setSelectedOrders([]);
      toast.show("Notas sendo emitidas");
      fetchData();
    } catch (error) {
      alert(error);
      fetchData();
    }
  }

  async function onGetLabel() {
    setLoading(true);
    const token = await getAccess_token();

    for (const order of selectedOrders) {
      try {
        await axios.get(
          `${config.baseURL}front/orders/${order}/etiqueta?formato=zpl2`,

          {
            headers: { Authorization: token, "content-type": "text/json" },
          }
        );
        setLoading(false);
        setSelectedOrders([]);
        fetchData();

        return toast.show("Etiquetas  preparadas");
      } catch (error) {
        alert(
          "Não foi possível gerar a etiqueta, tente novamente am alguns instantes."
        );
        setLoading(false);
        fetchData();
      }
    }
  }
  return (
    <View
      top={"80%"}
      right={"2%"}
      zIndex={10}
      position={"absolute"}
      padding={20}
    >
      {open && (
        <View
          borderRadius={20}
          width={200}
          position="absolute"
          top={-100}
          right={10}
          shadowColor={"black"}
          shadowRadius={2}
          backgroundColor={"white"}
        >
          <TouchableOpacity onPress={() => onSendInvoices()}>
            <View padding={20}>
              <Text>Emitir Nota Fiscal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onGetLabel()}>
            <View flexDirection="row" gap={5} padding={20}>
              {loading && (
                <Text>
                  <Spinner />
                </Text>
              )}

              <Text>Preparar Etiqueta</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={() => setOpen(!open)}>
        <View
          width={65}
          backgroundColor="#1890ff"
          padding={20}
          shadowColor={"black"}
          shadowRadius={1}
          borderRadius={50}
        >
          <Plus color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
