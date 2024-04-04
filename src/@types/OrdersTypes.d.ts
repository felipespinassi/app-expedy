export interface OrdersTypes {
  company: string;
  createdAt: string;
  customer_id: string;
  date: string;
  discount: number;
  erroEtiqueta: string;
  erroNota: string;
  etiqueta: boolean;
  fullfillment: boolean;
  gerando_arquivo: boolean;
  id: number;
  idERP_Order: number;
  infoNota: string;
  installment: null;
  integracao: {
    codigoErp: string;
    id: string;
    name: string;
    nomeNotaFiscal: "marketplace" | "expedy";
    tipo:
      | "shopee"
      | "mercadolivre"
      | "shein"
      | "magalu"
      | "b2w"
      | "yampi"
      | "olist"
      | "netshoes";
  };
  notaAutomatica: boolean;
  orderid: string;
  pack_id: number;
  partial_total: number;
  pedidoAgendado: boolean;
  point_sale: string;
  point_sale_id: string;
  shipment: string;
  shipment_value: 5;
  status: string;
  statusNota: boolean;
  statusNotaMarketplace: boolean;
  status_hub: string;
  taxes: number;
  tentativaEtiqueta: number;
  tentativaNota: number;
  total: number;
  updatedAt: string;
  ProductsSold: [
    {
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
    }
  ];
  Customer: {
    CustomerAddresses: [[Object]];
    birth_date: string;
    cellphone: string;
    cnpj: string;
    company_name: string;
    cpf: string;
    email: string;
    gender: string;
    id: string;
    name: string;
    phone: string;
    rg: string;
    state_inscription: string;
  };
  Mensagens: [];
  Payment: [
    {
      date: "2024-04-05T00:53:03.000+0800";
      id: string;
      installment: number;
      method: string;
      note: string;
      payment_place: string;
      value: string;
    }
  ];
}
