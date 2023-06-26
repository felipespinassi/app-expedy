export const listProgress = (pedidos: any) => {
  const pedidosParaExpedir = pedidos?.length;
  const pedidosExpedidos = pedidos?.filter(
    (pedido: any) => pedido.status_hub === "completo"
  ).length;
  const progress = pedidosExpedidos / pedidosParaExpedir;

  return Math.round(progress * 100);
};
