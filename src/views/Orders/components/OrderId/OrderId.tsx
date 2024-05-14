import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import DataCustomer from "./components/DataCustomer/DataCustomer";
import fetcher from "../../../../services/fetcher";
import { config } from "../../../../services/apiConfig";
import { Button } from "tamagui";
import ModalUpdateInfo from "./components/ModalUpdateInfo/ModalUpdateInfo";
import ModalErroNota from "./components/ModalErroNota/ModalErroNota";
import DataProducts from "./components/DataProducts/DataProducts";
import DataGeneral from "./components/DataGeneral/DataGeneral";
import OrderErrors from "./components/OrderErrors/OrderErrors";

export function OrderId({ route, navigation }: any) {
  const { data, isLoading, refetch, isFetching }: any = useQuery(
    "OrderComplete",
    async () =>
      await fetcher(`${config.baseURL}front/orders/complete/${route.params}`)
  );
  const [openModal, setOpenModal] = useState(false);
  const [openModalErroNota, setOpenModalErroNota] = useState(false);
  const pedido = data?.Order;

  if (isFetching) {
    return (
      <SafeAreaView>
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingTop: 15, gap: 20 }}>
            <OrderErrors
              pedido={pedido}
              setOpenModalErroNota={setOpenModalErroNota}
            />
            <DataGeneral pedido={pedido} />
            <DataCustomer pedido={pedido} />
            <Button
              onPress={() => setOpenModal(true)}
              color={"#fff"}
              backgroundColor={"#1890ff"}
            >
              Atualizar informações
            </Button>
            <DataProducts pedido={pedido} />
          </View>
        </ScrollView>

        {openModal && (
          <ModalUpdateInfo
            pedido={pedido}
            setOpenModal={setOpenModal}
            openModal={openModal}
            refetch={refetch}
          />
        )}

        {openModalErroNota && (
          <ModalErroNota
            pedido={pedido}
            openModalErroNota={openModalErroNota}
            setOpenModalErroNota={setOpenModalErroNota}
          />
        )}
      </SafeAreaView>
    </>
  );
}