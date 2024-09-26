import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";
import { Plus, X } from "lucide-react-native";
import { useToast } from "../../../../../components/Toast";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";

export default function FloatButton({
  selectedOrders,
  setSelectedOrders,
  fetchOrders,
}: any) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const successRef = useRef([] as any);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { colorScheme } = useColorScheme();

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

  const onOpenBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
    setOpen(true);
  };

  const onCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
    setOpen(false);
  };

  const styles = StyleSheet.create({
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  });
  return (
    <>
      {open && (
        <TouchableOpacity style={styles.overlay} onPress={onCloseBottomSheet} />
      )}

      <BottomSheet
        enablePanDownToClose={true}
        onClose={() => setOpen(false)}
        ref={bottomSheetRef}
        snapPoints={[150, 150]}
        index={-1}
        backgroundStyle={{
          backgroundColor: colorScheme === "dark" ? "#222" : "#f1f1f1",
        }}
        handleStyle={{
          backgroundColor: colorScheme === "dark" ? "#222" : "#f1f1f1",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        handleIndicatorStyle={{
          backgroundColor: colorScheme === "dark" ? "#f1f1f1" : "#222",
        }}
      >
        <BottomSheetView className=" flex-1   ">
          <ScrollView>
            <View className="gap-3 p-2">
              <TouchableOpacity
                className="bg-muted dark:bg-darkMuted p-4 rounded-lg flex flex-row items-center justify-center"
                onPress={onSendInvoices}
              >
                <Text className="text-foreground dark:text-darkForeground">
                  Emitir Notas
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={loading}
                className="bg-muted dark:bg-darkMuted p-4 rounded-lg flex flex-row items-center justify-center gap-3"
                onPress={onGetLabel}
              >
                {loading && <ActivityIndicator />}
                <Text className="text-foreground dark:text-darkForeground">
                  Preparar etiquetas
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>

      {!open && (
        <TouchableOpacity
          style={{
            top: "80%",
            right: "5%",
            zIndex: 0,
            position: "absolute",
            padding: 20,
          }}
          onPress={() => onOpenBottomSheet()}
        >
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
      )}
    </>
  );
}
