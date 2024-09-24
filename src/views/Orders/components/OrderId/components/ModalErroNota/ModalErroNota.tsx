import { View, Text, Modal, Alert, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import fetcher from "../../../../../../services/fetcher";
import { config } from "../../../../../../services/apiConfig";
import { X } from "lucide-react-native";
import { Button } from "../../../../../../../components/Button";
import { useToast } from "../../../../../../../components/Toast";

export default function ModalErroNota({
  pedido,
  openModalErroNota,
  setOpenModalErroNota,
  refetch,
}: any) {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  async function handleSendToMarketplace() {
    setLoading(true);
    try {
      await fetcher(`${config.baseURL}orders/invoice/marketplace`, {
        method: "POST",
        body: JSON.stringify({ idPedido: pedido.id }),
      });
      toast("Enviado para o marketplace com sucesso", "success");
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
      toast("XML atualizado com sucesso", "success");
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
      <View className="bg-background dark:bg-darkBackground flex-1">
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
            <Button loading={loading}>Atualizar XML</Button>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={loading}
            onPress={handleSendToMarketplace}
          >
            <Button loading={loading}>Enviar para o Marketplace</Button>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
