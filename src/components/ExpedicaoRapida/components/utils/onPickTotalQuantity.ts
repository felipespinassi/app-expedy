import axios from "axios";
import { getAccess_token } from "../../../../storage/getAccess_token";
import { Alert } from "react-native";

export async function onPickTotalQuantity(produto: any, fileId: any, toast: any,refetch:any) {
    const access_token = await getAccess_token();

    try {
        const response = await axios.put(
            `https://api.expedy.com.br/orders/file/putpicking/${fileId}?access_token=${access_token}`,
            {
                produto: {
                    id: produto.product_id,
                    quantidade: Number(produto.controle.quantidadeRestante),
                },
            }
        );
        refetch()
        toast.show("Salvo com sucesso!", {
            message: "Produto separado.",
        
        });

    } catch (error) {
        console.log(error);
        return Alert.alert("Não foi possivel atualizar");
    }
}