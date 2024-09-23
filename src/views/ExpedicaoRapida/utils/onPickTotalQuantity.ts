import { getAccess_token } from "../../../storage/getAccess_token";
import { Alert } from "react-native";

import fetcher from "../../../services/fetcher";
import { config } from "../../../services/apiConfig";
import { KeyedMutator } from "swr";
import { PickingListProps, PickingProduct } from "../@types/PickingProduct";

export async function onPickTotalQuantity(
  produto: PickingProduct,
  fileId: string,
  toast: any,
  mutate: KeyedMutator<PickingListProps>
) {
  const access_token = await getAccess_token();

  try {
    const response = await fetcher(
      `${config.baseURL}orders/file/putpicking/${fileId}?access_token=${access_token}`,
      {
        method: "PUT",
        body: JSON.stringify({
          produto: {
            id: produto.product_id,
            quantidade: Number(produto.controle.quantidadeRestante),
          },
        }),
      }
    );
    mutate();
    toast("Salvo com sucesso!", "success", 2000);
  } catch (error) {
    console.log(error);
    return Alert.alert("Não foi possivel atualizar");
  }
}
