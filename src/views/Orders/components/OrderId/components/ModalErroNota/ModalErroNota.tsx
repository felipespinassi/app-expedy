import { View, Text, Modal, Alert } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { X } from "@tamagui/lucide-icons";
import { Button, Spinner } from "tamagui";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { useToastController } from "@tamagui/toast";

export default function ModalErroNota({
  pedido,
  openModalErroNota,
  setOpenModalErroNota,
  refetch,
}: any) {
  const toast = useToastController();

  const [loading, setLoading] = useState(false);

  async function handleSendToMarketplace() {
    setLoading(true);
    try {
      await fetcher(`${config.baseURL}orders/invoice/marketplace`, {
        method: "POST",
        body: JSON.stringify({ idPedido: pedido.id }),
      });
      toast.show("Enviado para o marketplace com sucesso");
      refetch();
    } catch (error) {
      Alert.alert("Erro ao enviar para o marketplace");
    } finally {
      setOpenModalErroNota(false);
      setLoading(false);
    }
  }

  async function handleUpdateandSendXML() {
    setLoading(true);
    try {
      await fetcher(
        `${config.baseURL}faturador/consultar?pedido=${pedido.id}&faturador=apiFiscal`
      );
      toast.show("XML atualizado com sucesso");
      refetch();
    } catch (error) {
      Alert.alert("Erro ao atualizar XML");
    } finally {
      setOpenModalErroNota(false);
      setLoading(false);
    }
  }
  return (
    <Modal
      presentationStyle="formSheet"
      animationType="slide"
      visible={openModalErroNota}
    >
      <View style={{ alignItems: "flex-end", padding: 10 }}>
        <TouchableOpacity onPress={() => setOpenModalErroNota(false)}>
          <X size={26} color={"black"} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          padding: 20,
          color: "#ec5353",
        }}
      >
        {pedido.erroNota}
      </Text>

      <View style={{ gap: 10, padding: 20 }}>
        <TouchableOpacity disabled={loading} onPress={handleUpdateandSendXML}>
          <Button style={{ backgroundColor: "#1890ff", color: "white" }}>
            {loading && <Spinner />}
            Atualizar XML
          </Button>
        </TouchableOpacity>
        <TouchableOpacity disabled={loading} onPress={handleSendToMarketplace}>
          <Button style={{ backgroundColor: "#1890ff", color: "white" }}>
            {loading && <Spinner />}
            Enviar Para o Marketplace
          </Button>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
