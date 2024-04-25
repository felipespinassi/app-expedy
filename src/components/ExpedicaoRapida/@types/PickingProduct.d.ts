export interface PickingListProps {
  produtos: Product[];
}

export interface PickingProduct {
  controle: {
    quantidadeConferida: number;
    quantidadeRestante: number;
    quantidadeTotal: number;
  };
  database_name: string;
  id: string;
  order_id: string;
  original_name: string;
  price: number;
  product_id: string;
  product_kit_id: string;
  produtoAlterado: boolean;
  quantity: number;
  reference: string;
  tax_name: string;
  variacao: string;
}
