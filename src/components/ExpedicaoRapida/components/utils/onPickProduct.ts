import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { Alert } from "react-native";
import { config } from "../../../../services/apiConfig";
import fetcher from "../../../../services/fetcher";
import { Product } from "../../../../@types/Products";

export async function onPickProduct(
  params: {
    fileId: string;
    produto: Product;
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

    toast.show("Salvo com sucesso!", {
      message: "Produto separado.",
    });
  } catch (error) {
    console.log(error);
    return Alert.alert("Não foi possivel atualizar");
  }
}
