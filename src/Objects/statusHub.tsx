import { Box } from "native-base";

export const statusHub: any = {
  naocorrelacionado: {
    id: 1,
    identifier: "naocorrelacionado",
    name: "Sem vinculo",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "orange.500",
        }}
        bg={"orange.200"}
      >
        Sem vinculo
      </Box>
    ),
  },
  aprovado: {
    id: 2,
    identifier: "aprovado",
    name: "Aprovado",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "cyan.600",
        }}
        bg={"cyan.300"}
      >
        Aprovado
      </Box>
    ),
  },
  pendente: {
    id: 3,
    identifier: "pendente",
    name: "Pendente",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "muted.600",
        }}
        bg={"muted.300"}
      >
        Pendente
      </Box>
    ),
  },
  faturado: {
    id: 4,
    identifier: "faturado",
    name: "Faturado",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "lightBlue.600",
        }}
        bg={"lightBlue.300"}
      >
        Faturado
      </Box>
    ),
  },

  cancelado: {
    id: 5,
    identifier: "cancelado",
    name: "Cancelado",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "red.600",
        }}
        bg={"red.300"}
      >
        Cancelado
      </Box>
    ),
  },
  emseparacao: {
    id: 6,
    identifier: "emseparacao",
    name: "Em separação",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "amber.500",
        }}
        bg={"amber.200"}
      >
        Em separação
      </Box>
    ),
  },
  temmensagem: {
    id: 7,
    identifier: "temmensagem",
    name: "Tem mensagem",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "green.600",
        }}
        bg={"green.300"}
      >
        Tem mensagem
      </Box>
    ),
  },
  expedir: {
    id: 8,
    identifier: "expedir",
    name: "Expedir",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "danger.600",
        }}
        bg={"danger.200"}
      >
        Expedir
      </Box>
    ),
  },
  completo: {
    id: 9,
    identifier: "completo",
    name: "Completo",
    box: (
      <Box
        px={3}
        py={1}
        rounded="xl"
        _text={{
          color: "lime.700",
        }}
        bg={"lime.200"}
      >
        Completo
      </Box>
    ),
  },
};
