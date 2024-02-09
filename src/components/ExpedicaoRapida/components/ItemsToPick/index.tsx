import { KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Card,  H4, H5, Input, Theme, View } from 'tamagui'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function ItemsToPick({ produto }: any) {
    const navigation: any = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        >
            <View jc={'space-around'} h={'90%'} padding={5} >


                <View alignItems='center' >

                    <H4 textAlign='center'>{produto.database_name}</H4>
                </View>

                <View alignItems='center'  >

                    <H5 >SKU: {produto.reference}</H5>
                </View>


                <View alignItems='center' >
                    <Card justifyContent='center' gap={50} w={'85%'} h={'$15'} elevate size="$4" bordered>
                        <View alignItems='center'  >

                            <H5 >Quantidade necessária: {produto.quantity}</H5>
                        </View>


                        <View alignItems='center' justifyContent='center' >
                            <Input borderWidth={2} keyboardType='numeric' w={'$6'} />

                        </View>


                    </Card>

                </View>



                <Theme inverse >
                    <View alignItems='center'>

                        <Button onPress={() => navigation.navigate('ListaSeparacao')}>Confirmar</Button>
                    </View>
                </Theme>
            </View>



        </KeyboardAvoidingView>
    )
}