import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  Input,
  Modal,
  ScrollView,
  Select,
} from "native-base";
import { Modalize } from "react-native-modalize";

export default function ModalFilterPedidos({
  openModal,
  setOpenModal,
  modalizeRef,
}: any) {
  return (
    <Modalize
      adjustToContentHeight
      childrenStyle={{ height: "90%" }}
      ref={modalizeRef}
    >
      <View
        style={{
          padding: 5,
          maxWidth: "100%",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        <FormControl isRequired>
          <Input
            size={"lg"}
            _focus={{ borderColor: "primary.900", bg: "white" }}
            marginTop={5}
            placeholder="ID do Pedido"
            placeholderTextColor="#6b6b6b"
            variant="rounded"
            keyboardType="numeric"
          />
        </FormControl>

        <FormControl>
          <Input
            autoCapitalize="none"
            size={"lg"}
            _focus={{ borderColor: "primary.900", bg: "white" }}
            marginTop={5}
            placeholder="ID Marketplace"
            placeholderTextColor="#6b6b6b"
            variant="rounded"
          />
        </FormControl>
        <FormControl>
          <Input
            size={"lg"}
            _focus={{ borderColor: "primary.900", bg: "white" }}
            marginTop={5}
            placeholder="Nome do Cliente"
            placeholderTextColor="#6b6b6b"
            secureTextEntry={true}
            variant="rounded"
            autoCapitalize="none"
          />
        </FormControl>
        <Heading paddingTop={5} paddingBottom={2} fontSize={20}>
          Marketplaces
        </Heading>
        <View style={{ flexDirection: "row" }}>
          <Box
            height={7}
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            style={{ justifyContent: "center" }}
            bg={"orange.400"}
          >
            Shopee
          </Box>
          <Box
            height={7}
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            style={{ justifyContent: "center" }}
            bg={"trueGray.600"}
          >
            Shein
          </Box>
          <Box
            height={7}
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            style={{ justifyContent: "center" }}
            bg={"yellow.400"}
          >
            Mercado Livre
          </Box>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Box
            height={7}
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            style={{ justifyContent: "center" }}
            bg={"info.400"}
          >
            Magalu
          </Box>
          <Box
            height={7}
            rounded="lg"
            borderColor="red.400"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            bg={"red.400"}
          >
            B2W
          </Box>
        </View>
        <Heading paddingTop={5} fontSize={20}>
          Suas Lojas
        </Heading>
      </View>
    </Modalize>
  );
}
