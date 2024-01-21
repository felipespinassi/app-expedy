import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowBack from '../../../components/ArrowBack/ArrowBack'
import { Button, Heading } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { getService } from '../../../services/getService'
import AntDesign from "react-native-vector-icons/AntDesign";


export default function ArquivoGerado(props: any) {

    const item = props.route.params.id
    const navigation: any = useNavigation()

    async function handlePrintFile(item: any) {
        const response: any = await getService(
            `orders/file/print?id=${item.id}&usuario=Expedy`
        );
        if (response.status === 200) {
            console.log(response);

            return Alert.alert("Imprimindo");
        } else {
            console.log(response);

            return Alert.alert("Falha ao imprimir");
        }
    }
    return (
        <>
            <View
                style={{
                    height: "15%",
                    backgroundColor: "#002851",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingBottom: 15,
                }}
            >
                <ArrowBack navigation={navigation} />
                <Heading fontWeight={500} size={"md"} color={"white"}>
                    Arquivo Gerado

                </Heading>

            </View>

            <TouchableOpacity
                onPress={() => handlePrintFile(item)}
                style={{ paddingTop: 5, display:'flex', flexDirection:'row', justifyContent:'space-around' }}
            >
                
                <Button>Imprimir Arquivo</Button>
                <Button>Ver Lista de Picking</Button>
            </TouchableOpacity>
        </>
    )
}