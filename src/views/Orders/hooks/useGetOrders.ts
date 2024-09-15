import useSWR from "swr";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { useEffect, useState } from "react";

export function useGetOrders(filters: any) {
  const params = new URLSearchParams();
  Object.keys(filters).map((key) => {
    const value = filters[key];
    params.append(key, value);
  });

  const { data, isLoading, mutate, error, isValidating } = useSWR<any>(
    `${config.baseURL}front/orders/simples?pageSize=50&${params.toString()}`,
    fetcher
  );

  const [dataFormated, setDataFormated] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const newData = data?.pedidos;
      const filteredData = newData.filter((newItem: any) => {
        return !dataFormated.some((item: any) => item.id === newItem.id);
      });

      if (filters.page === 1) {
        setDataFormated(newData);
      } else {
        setDataFormated((prevData: any) => [...prevData, ...filteredData]);
      }
    }
  }, [data, filters.page]);

  return { data: dataFormated, isLoading, mutate, error, isValidating };
}
