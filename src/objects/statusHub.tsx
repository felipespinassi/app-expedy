import { Text, View } from "tamagui";

export const statusHub: any = {
  naocorrelacionado: {
    id: 1,
    identifier: "naocorrelacionado",
    name: "Sem vinculo",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#fed7aa"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#f97316"}>Sem vinculo</Text>
      </View>
    ),
  },
  aprovado: {
    id: 2,
    identifier: "aprovado",
    name: "Aprovado",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#67e8f9"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#0891b2"}>Aprovado</Text>
      </View>
    ),
  },
  pendente: {
    id: 3,
    identifier: "pendente",
    name: "Pendente",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#d4d4d4"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#525252"}>Pendente</Text>
      </View>
    ),
  },
  faturado: {
    id: 4,
    identifier: "faturado",
    name: "Faturado",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#7dd3fc"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#0284c7"}>Faturado</Text>
      </View>
    ),
  },

  cancelado: {
    id: 5,
    identifier: "cancelado",
    name: "Cancelado",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#fca5a5"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#dc2626"}>Cancelado</Text>
      </View>
    ),
  },
  emseparacao: {
    id: 6,
    identifier: "emseparacao",
    name: "Em separação",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#fde68a"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#f59e0b"}>Em Separaçao</Text>
      </View>
    ),
  },
  temmensagem: {
    id: 7,
    identifier: "temmensagem",
    name: "Tem mensagem",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#86efac"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#16a34a"}>Tem Mensagem</Text>
      </View>
    ),
  },
  expedir: {
    id: 8,
    identifier: "expedir",
    name: "Expedir",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#fecdd3"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#e11d48"}>Expedir</Text>
      </View>
    ),
  },
  completo: {
    id: 9,
    identifier: "completo",
    name: "Completo",
    box: (
      <View
        borderRadius={5}
        backgroundColor={"#d9f99d"}
        paddingHorizontal={5}
        paddingVertical={2}
      >
        <Text color={"#4d7c0f"}>Completo</Text>
      </View>
    ),
  },
};
