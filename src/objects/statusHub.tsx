import { Text, View } from "react-native";

export const statusHub: any = {
  naocorrelacionado: {
    id: 1,
    identifier: "naocorrelacionado",
    name: "Sem vinculo",
    box: (
      <View className="rounded-md bg-naocorrelacionado-light-background dark:bg-naocorrelacionado-dark-background px-2 py-1">
        <Text className="text-naocorrelacionado-light-text dark:text-naocorrelacionado-dark-text">
          Sem vinculo
        </Text>
      </View>
    ),
  },
  aprovado: {
    id: 2,
    identifier: "aprovado",
    name: "Aprovado",
    box: (
      <View className="rounded-md bg-aprovado-light-background dark:bg-aprovado-dark-background px-2 py-1">
        <Text className="text-aprovado-light-text dark:text-aprovado-dark-text">
          Aprovado
        </Text>
      </View>
    ),
  },
  pendente: {
    id: 3,
    identifier: "pendente",
    name: "Pendente",
    box: (
      <View className="rounded-md bg-pendente-light-background dark:bg-pendente-dark-background px-2 py-1">
        <Text className="text-pendente-light-text dark:text-pendente-dark-text">
          Pendente
        </Text>
      </View>
    ),
  },
  faturado: {
    id: 4,
    identifier: "faturado",
    name: "Faturado",
    box: (
      <View className="rounded-md bg-faturado-light-background dark:bg-faturado-dark-background px-2 py-1">
        <Text className="text-faturado-light-text dark:text-faturado-dark-text">
          Faturado
        </Text>
      </View>
    ),
  },
  cancelado: {
    id: 5,
    identifier: "cancelado",
    name: "Cancelado",
    box: (
      <View className="rounded-md bg-cancelado-light-background dark:bg-cancelado-dark-background px-2 py-1">
        <Text className="text-cancelado-light-text dark:text-cancelado-dark-text">
          Cancelado
        </Text>
      </View>
    ),
  },
  emseparacao: {
    id: 6,
    identifier: "emseparacao",
    name: "Em separação",
    box: (
      <View className="rounded-md bg-emseparacao-light-background dark:bg-emseparacao-dark-background px-2 py-1">
        <Text className="text-emseparacao-light-text dark:text-emseparacao-dark-text">
          Em Separação
        </Text>
      </View>
    ),
  },
  temmensagem: {
    id: 7,
    identifier: "temmensagem",
    name: "Tem mensagem",
    box: (
      <View className="rounded-md bg-temmensagem-light-background dark:bg-temmensagem-dark-background px-2 py-1">
        <Text className="text-temmensagem-light-text dark:text-temmensagem-dark-text">
          Tem Mensagem
        </Text>
      </View>
    ),
  },
  expedir: {
    id: 8,
    identifier: "expedir",
    name: "Expedir",
    box: (
      <View className="rounded-md bg-expedir-light-background dark:bg-expedir-dark-background px-2 py-1">
        <Text className="text-expedir-light-text dark:text-expedir-dark-text">
          Expedir
        </Text>
      </View>
    ),
  },
  completo: {
    id: 9,
    identifier: "completo",
    name: "Completo",
    box: (
      <View className="rounded-md bg-completo-light-background dark:bg-completo-dark-background  px-2 py-1">
        <Text className="text-completo-light-text dark:text-completo-dark-text">
          Completo
        </Text>
      </View>
    ),
  },
};
