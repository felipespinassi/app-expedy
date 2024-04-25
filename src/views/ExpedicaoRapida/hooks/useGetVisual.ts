import useSWR from "swr";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { OrdersResponseTypes } from "../@types/OrdersResponseTypes";

export function useGetVisual(filters: any) {
  const params = new URLSearchParams();
  Object.keys(filters).map((key) => {
    const value = filters[key];
    params.append(key, value);
  });

  const { data, isLoading, mutate, error } = useSWR<OrdersResponseTypes>(
    `${config.baseURL}orders/file/visual?pageSize=100&${params.toString()}`,
    fetcher
  );

  return { data, isLoading, mutate, error };
}
