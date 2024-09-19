# Expedy App

Este projeto é uma aplicação de gerenciamento de pedidos construída com React Native. Ele permite que os usuários visualizem, filtrem e gerenciem pedidos de forma eficiente.

## Funcionalidades

- **Visualização de Pedidos:** Exibe uma lista de pedidos com detalhes.
- **Filtros de Pedidos:** Permite aplicar filtros para refinar a lista de pedidos.
- **Paginação:** Suporta carregamento de mais pedidos conforme o usuário rola a tela.
- **Seleção de Pedidos:** Permite selecionar pedidos para ações em massa.
- **Modal de Filtros:** Interface para aplicar filtros avançados.
- **Geração de Arquivos:** Permite gerar arquivos a partir dos pedidos selecionados para impressão de etiquetas de marketplaces.
- **Picking List:** Permite visualizar o picking list e pegar produtos diretamente no app, inserindo os valores coletados.

## Tecnologias Utilizadas

- **React Native:** Framework principal para construção da aplicação.
- **React Hook Form:** Gerenciamento de formulários.
- **SWR:** Data fetching e caching.
- **Tamagui:** Biblioteca de componentes UI.
- **TypeScript:** Tipagem estática para JavaScript.

## Estrutura do Projeto

```plaintext
src/
├── @types/
│   └── OrdersTypes.ts
├── components/
│   └── ListEmptyComponent/
│       └── ListEmptyComponent.tsx
├── views/
│   ├── Orders/
│   │   ├── components/
│   │   │   └── ModalFilters/
│   │   │       └── ModalFilters.tsx
│   │   ├── hooks/
│   │   │   └── useGetOrders.ts
│   │   └── Orders.tsx
│   ├── ExpedicaoRapida/
│   │   ├── components/
│   │   │   └── Expedir/
│   │   │       └── Expedir.tsx
│   │   └── index.tsx
