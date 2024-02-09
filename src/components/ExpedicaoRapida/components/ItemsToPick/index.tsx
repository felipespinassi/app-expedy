import { KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, H4, H5, Input, Theme, View } from 'tamagui'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function ItemsToPick({ produto }: any) {
    const navigation: any = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        >
            <View jc={'space-around'} h={'80%'} >


                <View alignItems='center' >

                    <H4 textAlign='center'>{produto.database_name}</H4>
                </View>

                <View alignItems='center'  >

                    <H5 >SKU: {produto.reference}</H5>
                </View>
                <View alignItems='center'>
                    <Input borderWidth={2} keyboardType='numeric' w={'$6'} />

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