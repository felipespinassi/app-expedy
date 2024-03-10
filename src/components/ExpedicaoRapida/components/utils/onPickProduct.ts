import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { Alert } from "react-native";

export async function onPickProduct(params: any,quantity:any,toast:any,navigation:any) {
    const access_token = await getAccess_token();

    try {
      const response = await axios.put(
        `https://api.expedy.com.br/orders/file/putpicking/${params.fileId}?access_token=${access_token}`,
        {
          produto: {
            id: params.produto.product_id,
            quantidade: Number(quantity),
          },
        }
      );
      navigation.goBack()

       toast.show("Salvo com sucesso!", {
        message: "Produto separado.",
      });
     
    } catch (error) {
      console.log(error);
      return Alert.alert("Não foi possivel atualizar");
    }
  }