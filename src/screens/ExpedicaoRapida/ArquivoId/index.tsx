import { View, Text, Alert } from "react-native";
import React from "react";
import { Box, Button, Heading } from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getService } from "../../../services/getService";

export default function ArquivoId(props: any) {
  const item: string = props.route.params._id;
  const navigation: any = useNavigation();

  async function handlePrintFile(item: string) {
    console.log(item);
    const response: any = await getService(`orders/file/print?id=${item}&usuario=Expedy`);
    if (response.status === 200) {
      return Alert.alert("Imprimindo");
    } else {
      return Alert.alert("Falha ao imprimir");
    }
  }
  return (
    <>
      <View
        style={{
          height: "15%",
          backgroundColor: "#002851",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <ArrowBack navigation={navigation} />
        <Heading fontWeight={500} size={"md"} color={"white"}>
          Arquivo
        </Heading>
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate("ListaSeparacao", item)}>
          <Box
            height={100}
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
            py={1}
            style={{ marginBottom: 10, justifyContent: "space-around" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="file-text" size={24} />

              <Heading style={{ marginLeft: 10 }} fontWeight={500} size={"sm"}>
                Lista de Picking
              </Heading>
            </View>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate("ArquivosGerados")}
        >
          <Box
            height={100}
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
            py={1}
            style={{ marginBottom: 10, justifyContent: "space-around" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="file-text" size={24} />

              <Heading style={{ marginLeft: 10 }} fontWeight={500} size={"sm"}>
                Pedidos
              </Heading>
            </View>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePrintFile(item)}>
          <Button style={{ backgroundColor: "#002851" }}>Imprimir Arquivo</Button>
        </TouchableOpacity>
      </View>
    </>
  );
}
