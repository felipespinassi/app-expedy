import { View, Text, Alert } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

import React from 'react'
import ArrowBack from '../../../components/ArrowBack/ArrowBack'
import { Button, Center, Heading, ScrollView, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { getService } from '../../../services/getService'
import { useQuery } from 'react-query';



export default function ArquivoGerado(props: any) {
    const item = props.route.params._id
    const navigation: any = useNavigation()
    const { data: response, isLoading, refetch, isFetching }: any = useQuery(
        "OrderComplete",
        async () => await getService(`orders/file/picking/${item}`, {})
    );






    async function handlePrintFile(item: any) {
        const response: any = await getService(
            `orders/file/print?id=${item}&usuario=Expedy`
        );
        if (response.status === 200) {

            return Alert.alert("Imprimindo");
        } else {

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

            <ScrollView >
                {response?.data.produtos.map((produto: any, index: any) => {
                    return (
                        <VStack>
                            <Center
                                shadow={1}
                                rounded={"md"}
                                bg={"light.50"}
                                style={{
                                    height: 120,
                                    marginBottom: 10,
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    paddingHorizontal: 5,
                                }}
                            >

                                <View key={index} style={{ height: 80, flexDirection: 'row', gap: 10, flexWrap: 'wrap', padding: 10 }}>

                                    <Text >{produto.reference}</Text>
                                    <Text >{produto.database_name}</Text>
                                </View>
                            </Center>
                        </VStack>


                    )
                })}


            </ScrollView>

            <View style={{ paddingTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                    onPress={() => handlePrintFile(item)}

                >

                    <Button style={{ backgroundColor: '#002851' }}>Imprimir Arquivo</Button>
                </TouchableOpacity>



            </View>


        </>
    )
}