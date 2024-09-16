import useSWR from "swr";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { useEffect, useRef, useState } from "react";

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

  const dataFormatedRef = useRef<any>([]);

  if (data) {
    const newData = data?.pedidos;
    const filteredData = newData.filter((newItem: any) => {
      return !dataFormatedRef.current.some(
        (item: any) => item.id === newItem.id
      );
    });

    if (filters.page === 1) {
      dataFormatedRef.current = newData;
    } else {
      dataFormatedRef.current = [...dataFormatedRef.current, ...filteredData];
    }
  }

  return {
    data: dataFormatedRef.current,
    isLoading,
    mutate,
    error,
    isValidating,
    paging: data?.paging,
  };
}
