import useSWR from "swr";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { FilesProps } from "../@types/Files";

export function useGetFiles() {
  const { data, isLoading, error } = useSWR<FilesProps>(
    `${config.baseURL}orders/file`,
    fetcher,
    {}
  );
  return { data, isLoading, error };
}
