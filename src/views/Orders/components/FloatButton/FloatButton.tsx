import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";
import { Plus } from "lucide-react-native";
import { useToast } from "../../../../../components/Toast";

export default function FloatButton({
  selectedOrders,
  setSelectedOrders,
  fetchOrders,
}: any) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const successRef = useRef([] as any);

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
      toast("Notas sendo emitidas", "info");
      fetchOrders();
    } catch (error) {
      alert(error);
      fetchOrders();
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
        successRef.current.push(order);
      } catch (error) {}
    }
    toast(
      `${successRef.current.length} etiquetas preparadas de ${selectedOrders.length} processadas`,
      "info"
    );

    setLoading(false);
    setSelectedOrders([]);
    fetchOrders();
  }
  return (
    <SafeAreaView
      style={{
        top: "80%",
        right: "5%",
        zIndex: 10,
        position: "absolute",
        padding: 20,
      }}
    >
      {open && (
        <View
          style={{
            borderRadius: 20,
            width: 200,
            position: "absolute",
            top: -115,
            right: 10,
            shadowColor: "black",
            shadowRadius: 2,
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 0 },
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity onPress={() => onSendInvoices()}>
            <View style={{ padding: 20 }}>
              <Text>Emitir Nota Fiscal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onGetLabel()}>
            <View style={{ flexDirection: "row", gap: 5, padding: 20 }}>
              {loading && (
                <Text>
                  <ActivityIndicator />
                </Text>
              )}

              <Text>Preparar Etiqueta</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={() => setOpen(!open)}>
        <View
          style={{
            width: 65,
            backgroundColor: "#1890ff",
            padding: 20,
            shadowColor: "black",
            shadowRadius: 1,
            borderRadius: 50,
          }}
        >
          <Plus color={"white"} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
