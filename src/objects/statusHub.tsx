import { Text, View } from "react-native";

export const statusHub: any = {
  naocorrelacionado: {
    id: 1,
    identifier: "naocorrelacionado",
    name: "Sem vinculo",
    box: (
      <View className="rounded-md bg-orange-200 px-2 py-1">
        <Text className="text-orange-500">Sem vinculo</Text>
      </View>
    ),
  },
  aprovado: {
    id: 2,
    identifier: "aprovado",
    name: "Aprovado",
    box: (
      <View className="rounded-md bg-cyan-200 px-2 py-1">
        <Text className="text-cyan-700">Aprovado</Text>
      </View>
    ),
  },
  pendente: {
    id: 3,
    identifier: "pendente",
    name: "Pendente",
    box: (
      <View className="rounded-md bg-gray-300 px-2 py-1">
        <Text className="text-gray-600">Pendente</Text>
      </View>
    ),
  },
  faturado: {
    id: 4,
    identifier: "faturado",
    name: "Faturado",
    box: (
      <View className="rounded-md bg-blue-200 px-2 py-1">
        <Text className="text-blue-700">Faturado</Text>
      </View>
    ),
  },
  cancelado: {
    id: 5,
    identifier: "cancelado",
    name: "Cancelado",
    box: (
      <View className="rounded-md bg-red-300 px-2 py-1">
        <Text className="text-red-700">Cancelado</Text>
      </View>
    ),
  },
  emseparacao: {
    id: 6,
    identifier: "emseparacao",
    name: "Em separação",
    box: (
      <View className="rounded-md bg-yellow-200 px-2 py-1">
        <Text className="text-yellow-600">Em Separação</Text>
      </View>
    ),
  },
  temmensagem: {
    id: 7,
    identifier: "temmensagem",
    name: "Tem mensagem",
    box: (
      <View className="rounded-md bg-green-200 px-2 py-1">
        <Text className="text-green-600">Tem Mensagem</Text>
      </View>
    ),
  },
  expedir: {
    id: 8,
    identifier: "expedir",
    name: "Expedir",
    box: (
      <View className="rounded-md bg-rose-200 px-2 py-1">
        <Text className="text-rose-600">Expedir</Text>
      </View>
    ),
  },
  completo: {
    id: 9,
    identifier: "completo",
    name: "Completo",
    box: (
      <View className="rounded-md bg-lime-200 px-2 py-1">
        <Text className="text-lime-700">Completo</Text>
      </View>
    ),
  },
};
