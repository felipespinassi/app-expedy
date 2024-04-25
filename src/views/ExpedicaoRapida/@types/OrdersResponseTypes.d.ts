export interface Orders {
  id: number;
  orderid: string;
  integracao: {
    name: string;
    tipo:
      | "mercadolivre"
      | "shopee"
      | "magalu"
      | "b2w"
      | "olist"
      | "yampi"
      | "netshoes"
      | "shein";
    id: string;
  };
  dataCriacao: string;
  cliente: string;
  status: string;
  produto: [
    {
      id: string;
      descricao: string;
    }
  ];
}
export interface Paging {
  total: number;
  page: number;
  limit: number;
  offset: number;
}

export interface MaisVendidos {
  id_produto: string;
  sku: string;
  quantity: number;
  name: string;
}

export interface OrdersResponseTypes {
  orders: Orders[];
  paging: Paging;
  maisVendidos: MaisVendidos[];
}
