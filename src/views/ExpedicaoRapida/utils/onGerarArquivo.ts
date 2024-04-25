import { Alert } from "react-native";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { KeyedMutator } from "swr";
import { OrdersResponseTypes } from "../@types/OrdersResponseTypes";
import { FiltersProps } from "../@types/FiltersExpedirTypes";

export async function onGerarArquivo(
  form: UseFormReturn<FiltersProps>,
  mutate: KeyedMutator<OrdersResponseTypes>
) {
  const values: any = form.getValues();
  const params = new URLSearchParams();
  Object.keys(values).map((key) => {
    const value = values[key];
    params.append(key, value);
  });

  if (Object.keys(values).length <= 0) {
    return Alert.alert("Selecione um filtro para gerar o arquivo");
  }
  try {
    const response = await fetcher(
      `${config.baseURL}orders/file/create?usuario=Expedy&${params.toString()}`,
      { method: "POST" }
    );
    mutate();
    return Alert.alert("Arquivo gerado");
  } catch (error) {
    console.log(error);
  }
}
