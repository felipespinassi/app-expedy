import { Text } from 'react-native'
import React from 'react'
import { Heading, Theme, View } from 'tamagui'
import ArrowBack from '../../../components/ArrowBack/ArrowBack'
import { useNavigation } from '@react-navigation/native';

import ItemsToPickComponent from '../../../components/ExpedicaoRapida/components/ItemsToPick';

export default function ItemsToPick(props: any) {
  const navigation: any = useNavigation();

  const produto = props.route.params

  return (
    <Theme  name={'light'}>
      <View
        backgroundColor={'#002851'}
        height={'15%'}
        justifyContent="flex-end"
        alignItems="center"
        paddingBottom={15}
      >
        <ArrowBack navigation={navigation} />
        <Heading color={"white"}>
          Produtos
        </Heading>
      </View>
      <ItemsToPickComponent produto={produto} />
    </Theme>
  )
}