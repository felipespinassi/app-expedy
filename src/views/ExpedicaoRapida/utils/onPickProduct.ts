import axios from "axios";
import { getAccess_token } from "../../../storage/getAccess_token";
import { Alert } from "react-native";
import { config } from "../../../services/apiConfig";
import fetcher from "../../../services/fetcher";
import { PickingProduct } from "../@types/PickingProduct";

export async function onPickProduct(
  params: {
    fileId: string;
    produto: PickingProduct;
  },
  quantity: string,
  toast: any,
  navigation: any
) {
  try {
    const response = await fetcher(
      `${config.baseURL}orders/file/putpicking/${params.fileId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          produto: {
            id: params.produto.product_id,
            quantidade: Number(quantity),
          },
        }),
      }
    );
    navigation.goBack();

    toast("Salvo com sucesso!", "success");
  } catch (error) {
    console.log(error);
    return Alert.alert("Não foi possivel atualizar");
  }
}
