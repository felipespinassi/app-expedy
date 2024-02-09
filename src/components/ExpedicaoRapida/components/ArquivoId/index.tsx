import React from 'react'
import { getService } from '../../../../services/getService';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../../ArrowBack/ArrowBack';
import { Button, Heading, ListItem, Theme, YGroup } from 'tamagui';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'tamagui';
import { Alert } from 'react-native';


export default function ArquivoId({file}: any) {
    const navigation: any = useNavigation();


    async function handlePrintFile(item: string) {
        const response: any = await getService(`orders/file/print?id=${item}&usuario=Expedy`);
        if (response.status === 200) {
            return Alert.alert("Imprimindo");
        } else {
            return Alert.alert("Falha ao imprimir");
        }
    }
    return (
        <Theme name={'light'}>
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
                <Heading color={"white"}>
                    Arquivo
                </Heading>
            </View>
            <View style={{ paddingHorizontal: 5 , gap:10, marginTop:10}}>
                <TouchableOpacity onPress={() => navigation.navigate("ListaSeparacao", file)}>
                    <YGroup minWidth={'95%'} alignSelf="center" bordered width={240} size="$4">
                        <YGroup.Item  >
                            <ListItem  size={'$6'} title="Lista de Separação" subTitle="Picking" />
                        </YGroup.Item>

                    </YGroup>
                </TouchableOpacity>
                <TouchableOpacity
                //   onPress={() => navigation.navigate("ArquivosGerados")}
                >
                    <YGroup minWidth={'95%'} alignSelf="center" bordered width={240} size="$4">
                        <YGroup.Item  >
                            <ListItem size={'$6'} title="Pedidos" subTitle="pedidos " />
                        </YGroup.Item>

                    </YGroup>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePrintFile(file)}>
                    <Button>Imprimir Arquivo</Button>
                </TouchableOpacity>
            </View>
        </Theme>
    )
}